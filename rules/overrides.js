module.exports = {
  rules: {
    // Override eslint-config-airbnb react rules (https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js)
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',
    // Override eslint-config-airbnb react a11y rules (https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react-a11y.js)
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {
        // Override eslint-config-airbnb react rules (https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/react.js)
        'react/prop-types': 'off',
        'react/jsx-filename-extension': [
          'error',
          {
            extensions: ['.tsx'],
          },
        ],
        'react/jsx-no-useless-fragment': [
          'error',
          {
            allowExpressions: true,
          },
        ],
      },
    },
  ],
};
