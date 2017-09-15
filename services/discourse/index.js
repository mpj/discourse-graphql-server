const fetch = require('node-fetch')
const baseUrl = 'https://www.funfunforum.com'

const discourseAPIUrlFactory = require('./discourse-api-url')
const discourseGetFactory = require('./discourse-get')
const getUserByUsernameFactory = require('./get-user-by-username')
const getActionsByUsernameFactory = require('./get-actions-by-username')

const discourseAPIUrl = discourseAPIUrlFactory({
  process,
  baseUrl
})

const discourseGet = discourseGetFactory({
  discourseAPIUrl,
  fetch
})

const getUserByUsername = getUserByUsernameFactory({
  discourseGet
})

const getActionsByUsername = getActionsByUsernameFactory({
  discourseGet
})

module.exports = {
  getUserByUsername,
  getActionsByUsername
}