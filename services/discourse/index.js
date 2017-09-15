const fetch = require('node-fetch')
const baseUrl = 'https://www.funfunforum.com'

const discourseAPIUrlFactory = require('./discourse-api-url')
const discourseGetFactory = require('./discourse-get')

const discourseAPIUrl = discourseAPIUrlFactory({
  process,
  baseUrl
})

const discourseGet = discourseGetFactory({
  discourseAPIUrl,
  fetch
})

module.exports = {
  discourseGet
}

