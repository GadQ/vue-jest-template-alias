module.exports = {
  moduleFileExtensions: [ 'js', 'vue' ],
  transform: {
    '^.+\\.vue$': 'vue-jest'
  },
  moduleNameMapper: {
    '^vue$': 'vue/dist/vue.js',
    '^@components/(.*)$': '<RootDir>/components',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}'
  ]
}
