/**
 * Copyright 2019 Vaadin Ltd. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

module.exports = {
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:lit/all',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint'
  ],
  plugins: [
    '@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['**/test/**/*.ts'],
      },
    ],
    'class-methods-use-this': 'off',
    'no-console': [ 'error', { allow: ['warn'] } ],
    'no-underscore-dangle': 'off',
    'no-unused-expressions': [
      'error',
      { allowShortCircuit: true, allowTernary: true }
    ]
  },
  overrides: [
    {
      files: [ '**/test/unit/*.test.ts' ],
      env: {
        mocha: true
      },
      globals: {
        chai: false,
        sinon: false
      },
      rules: {
        '@typescript-eslint/no-non-null-assertion': 'off',
        'no-unused-expressions': 'off'
      }
    },
    {
      files: [ '**/test/visual/*.js' ],
      globals: {
        gemini: false
      }
    },
    {
      files: [ '**/karma.conf.js' ],
      env: {
        node: true
      }
    }
  ]
};
