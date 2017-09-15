module.exports = function startExpressFactory({
  express,
  graphqlHTTP,
  process,
  graphQLSchema
}) {
  return function startExpress() {
    const app = express()

    app.use('/graphql', graphqlHTTP({
      schema: graphQLSchema(),
      graphiql: true
    }))

    app.listen(process.env.PORT || 4000)
  }
}