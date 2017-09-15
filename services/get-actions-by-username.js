const {
  errorUnlessOK,
  parseAsJSON
} = require('./helpers')

module.exports = function getActionsByUsernameFactory({
  fetch,
  discourseAPIUrl
}) {
  return function getActionsByUsername(username, offset, filter) {
    return fetch(discourseAPIUrl(`/user_actions.json`, {username, offset, filter}))
    .then(errorUnlessOK)
    .then(parseAsJSON)
  }
}
