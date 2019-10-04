module.exports = {
  'extends': 'airbnb',
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'no-use-before-define': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'comma-dangle': 'off',
    'no-underscore-dangle': 0,
    "no-unused-expressions": ["error", { "allowTernary": true }],
    "react/jsx-wrap-multilines": false,
    "object-curly-newline": ["error", { "multiline": true, "minProperties": 4 }],
    'max-len': 0,
    "import/no-unresolved": [2, { caseSensitive: false }],
    "prefer-destructuring": ["error", { "object": true, "array": false }],
    "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    "no-param-reassign": [2, { "props": false }],
    "no-unused-expressions": "off",
    "arrow-body-style": 0
  },
  'globals': {
    "fetch": false,
    "__DEV__": false,
    "window": false
  }
}
