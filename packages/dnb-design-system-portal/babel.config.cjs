module.exports = {
  presets: [
    [
      'babel-preset-gatsby',
      {
        reactRuntime: 'automatic',
      },
    ],
  ],
  ignore: [
    // Needed in order to run on IE11
    '.*node_modules/(?!rewrite-pattern|ansi-regex|strip-ansi|regexpu-core|buble|react-live).*',
  ],
}