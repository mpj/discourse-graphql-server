const {
  errorUnlessOK,
  parseAsJSON
} = require('../helpers')

module.exports = function getUserByUsernameFactory({
  discourseGet
}) {
  return function getUserByUsername(username) {
    return discourseGet(`/users/${username}.json`)
      .then(errorUnlessOK)
      .then(parseAsJSON)
  }
}
