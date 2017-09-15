module.exports = function discourseAPIUrlFactory({
  fetch,
  queryString,
  process,
  baseUrl
}) {
  return function discourseAPIUrl(path, query) {
    if (path.includes('?')) {
      throw new Error('path cannot include query')
    }

    const queryObject = query ? queryString.parse(query) : {}
    queryObject.api_key = process.env.DISCOURSE_API_KEY
    queryObject.api_username = 'system'

    return `${baseUrl}${path}?${queryString.stringify(queryObject)}`
  }
}