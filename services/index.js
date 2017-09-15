
const express = require('express')
const graphqlHTTP = require('express-graphql')
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema
} = require('graphql')

const startExpressFactory = require('./start-express')
const graphQLSchemaFactory = require('./graphql-schema')

const getUserByUsernameFactory = require('./get-user-by-username')

const { discourseGet } = require('./discourse')

const getUserByUsername = getUserByUsernameFactory({
  discourseGet
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
