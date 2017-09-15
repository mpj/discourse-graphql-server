const {
  errorUnlessOK,
  parseAsJSON
} = require('../helpers')

module.exports = function getActionsByUsernameFactory({
  discourseGet
}) {
  return function getActionsByUsername(username, offset, filter) {
    return discourseGet(`/user_actions.json`, { username, offset, filter })
      .then(errorUnlessOK)
      .then(parseAsJSON)
  }
}
