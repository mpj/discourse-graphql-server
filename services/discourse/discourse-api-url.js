const queryString = require('query-string')
module.exports = function discourseAPIUrlFactory({
  process,
  baseUrl
}) {
  return function discourseAPIUrl(path, queryObject = {}) {
    if (path.includes('?')) {
      throw new Error('path cannot include query')
    }

    queryObject.api_key = process.env.DISCOURSE_API_KEY
    queryObject.api_username = 'system'

    return `${baseUrl}${path}?${queryString.stringify(queryObject)}`
  }
}