module.exports = function graphQLSchemaFactory(dependencies) {
  const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    getUserByUsername
  } = dependencies
  return function graphQLSchema() {

    const UserType = new GraphQLObjectType({
      name: 'User',
      description: '...',

      fields: () => ({
        createdAt: {
          type: GraphQLString,
          resolve: x => x.user.created_at
        },
        username: {
          type: GraphQLString,
          resolve: x => x.user.username,
        },
        id: {
          type: GraphQLString,
          resolve: x => x.user.id,
        }
      })
    })

    return new GraphQLSchema({
      query: new GraphQLObjectType({
        name: 'Query',
        description: '...',

        fields: () => ({
          user: {
            type: UserType,
            args: {
              username: { type: GraphQLString }
            },
            resolve: (root, { username }) => getUserByUsername(username)
          }
        })
      })
    })
  }
}