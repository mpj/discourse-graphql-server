module.exports = function discourseAPIFactory({
  fetch,
  discourseAPIUrl
}) {
  return function discourseGet(path, params) {
    return fetch(discourseAPIUrl(path, params))
  }
}