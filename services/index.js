const fetch = require('node-fetch')
const express = require('express')
const graphqlHTTP = require('express-graphql')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema
} = require('graphql')
const queryString = require('query-string')

const startExpressFactory = require('./start-express')
const graphQLSchemaFactory = require('./graphql-schema')
const discourseAPIUrlFactory = require('./discourse-api-url')
const getUserByUsernameFactory = require('./get-user-by-username')

const baseUrl = 'https://www.funfunforum.com'

const discourseAPIUrl = discourseAPIUrlFactory({
  fetch,
  queryString,
  process,
  baseUrl
})

const getUserByUsername = getUserByUsernameFactory({
  fetch,
  discourseAPIUrl
})

const graphQLSchema = graphQLSchemaFactory({
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  getUserByUsername
})

const startExpress = startExpressFactory({
  express,
  graphqlHTTP,
  process,
  graphQLSchema
})

module.exports = {
  startExpress
}
