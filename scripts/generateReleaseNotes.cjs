#!/usr/bin/env node

/**
 * Create release notes.
 *
 * Example
 *   ./scripts/generateReleaseNotes.cjs --from from_tag --to to_tag --compact
 *
 * When --to is not given the latest tag is selected.
 * When --from is not given the previous tag is selected.
 */

const exec = require('util').promisify(require('child_process').exec);
const version = require('../package.json').version;

let from, to;

const keyName = {
  break: ':boom:　Breaking Changes',
  feat: ':rocket:　New Features',
  fix: ':bug:　Bug Fixes',
  refactor: ':nail_care:　Polish',
  docs: ':memo:　Documentation',
  test: ':microscope:　Tests',
  chore: ':house:　Internal',
};

async function run(cmd) {
  const { stdout } = await exec(cmd, { maxBuffer: 5000 * 1024 });
  return stdout.trim();
}

// Compute tags used for commit delimiters
async function getReleases() {
  for (let i = 2; process.argv[i]; i++) {
    switch (process.argv[i]) {
      case '--from':
        i += 1;
        from = process.argv[i];
        break;
      case '--to':
        i += 1;
        to = process.argv[i];
        break;
      default:
        break;
    }
  }

  if (!from) {
    const branch = await run(`git rev-parse --abbrev-ref HEAD`);
    await run(`git pull origin ${branch} --tags`);
    const tags = await run(`git tag --merged ${branch} --sort='-*committerdate'`);
    from = tags.split('\n')[1];
  }

  if (!to) {
    to = `v${version}`;
  }
}

// Parse git log string and return an array of parsed commits as a JS object.
function parseLog(log) {
  const commits = [];
  let commit, pos, result;
  log.split('\n').forEach((line) => {
    switch (pos) {
      case 'head':
        if (!line.trim()) {
          pos = 'title';
          break;
        }
        result = /^(\w+): +(.+)$/.exec(line);
        if (result) {
          commit.head[result[1]] = result[2];
          break;
        }
        break;
      case 'title':
        if (!line.trim()) {
          pos = 'body';
          break;
        }
        result = /^ +(\w+)(!?): +(.*)$/.exec(line);
        if (result) {
          commit.type = result[1].toLowerCase();
          commit.breaking = !!result[2];
          commit.isBreaking = commit.breaking;
          commit.skip = !commit.breaking && !/(feat|fix|perf)/.test(commit.type);
          commit.isIncluded = !commit.skip;
          commit.title += result[3];
        } else {
          commit.title += line;
        }
        break;
      case 'body':
        result = /^ +([A-Z][\w-]+): +(.*)$/.exec(line);
        if (result) {
          const k = result[1].toLowerCase();
          if (/(fixes|fix|related-to|connected-to)/i.test(k)) {
            commit.footers.fixes = commit.footers.fixes || [];
            commit.footers.fixes.push(...result[2].split(/[, ]+/).filter((s) => /\d+/.test(s)));
          } else {
            commit.footers[k] = commit.footers[k] || [];
            commit.footers[k].push(result[2]);
          }
          break;
        }
      // eslint-disable-next-line no-fallthrough
      default:
        result = /^commit (.+)$/.exec(line);
        if (result) {
          commit = {
            head: {},
            title: '',
            body: '',
            isIncluded: false,
            isBreaking: false,
            footers: { fixes: [] },
            commits: [],
          };
          commits.push(commit);
          commit.commit = result[1];
          pos = 'head';
        }
    }
  });
  return commits;
}

// Return absolute link to GH given a path
function createGHLink(path) {
  return `https://github.com/vaadin/${path}`;
}

// Create link to GitHub repo given a type or id
function createLink(type, id, char) {
  return id ? `[${char ? char : id}](${createGHLink(`eslint-config-vaadin/${type}/${id})`)}` : '';
}

// Convert GH internal links to absolute links
function parseLinks(message) {
  message = message.trim();
  message = message.replace(/^([\da-f]+) /, `${createLink('commit', '$1', '`$1`')} `);
  message = message.replace(/ *\(#(\d+)\)$/g, ` (${createLink('pull', '$1', '#$1')})`);
  return message;
}

// Log a commit for release notes
function logCommit(c) {
  let log = '';
  let indent = '';
  log += `${indent}- ${parseLinks(`${c.commit.substring(0, 7)} ${c.title[0].toUpperCase()}${c.title.slice(1)}`)}`;
  console.log(log);
}

// Log a set of commits, and group by types
function logCommitsByType(commits) {
  if (!commits[0]) {
    return;
  }
  const byType = {};
  commits.forEach((commit) => {
    const type = commit.bfp ? 'bfp' : commit.breaking ? 'break' : commit.type;
    byType[type] = [...(byType[type] || []), commit];
  });

  Object.keys(keyName).forEach((k) => {
    if (byType[k]) {
      console.log(`\n#### ${keyName[k]}`);
      byType[k].forEach((c) => logCommit(c));
    }
  });
}

// Output the release notes for the set of commits
function generateReleaseNotes(commits) {
  if (commits.length) {
    console.log(`### Changes Since [${from}](https://github.com/vaadin/eslint-config-vaadin/releases/tag/${from})`);
  } else {
    console.log(
      `### No Changes Since [${from}](https://github.com/vaadin/eslint-config-vaadin/releases/tag/${from})})`,
    );
  }
  logCommitsByType(commits);
}

// MAIN
async function main() {
  await getReleases();
  const gitLog = await run(`git log ${from}..${to} --name-only`);
  const commits = parseLog(gitLog);
  generateReleaseNotes(commits);
}

main();
