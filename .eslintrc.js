module.exports = {
  "env": {
    "browser": true,
    "es6": true,
    "node": true,
    "jest": true,
  },
  "extends": "standard",
  "globals": {
  },
  "parser": "babel-eslint",
  "plugins": [
      "standard",
      "import",
      "react",
  ],
  "rules": {
    "comma-dangle": ["error", "only-multiline"],
    "eol-last": 0,
    "keyword-spacing": ["error", {"before": true, "after": false, "overrides": {
      "case": {"after": true},
      "const": {"after": true},
      "default": {"after": true},
      "else": {"after": true},
      "export": {"after": true},
      "from": {"after": true},
      "import": {"after": true},
      "let": {"after": true},
    }}],
    "no-unused-vars": ["error", {"vars": "all", "varsIgnorePattern": "React|^_$", "args": "none", "ignoreRestSiblings": false}],
    "object-curly-spacing": 0,
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "space-before-function-paren": ["error", "never"],
    "space-unary-ops": [2, {"words": true, "nonwords": false, "overrides": {"typeof": false}}],
    "react/jsx-uses-vars": [2],
  }
};
