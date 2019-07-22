const gql = require('graphql')

const StudentSchema = new gql.GraphQLObjectType({
  name: 'StudentGraphQL',
  fields: {
    id: {type: gql.GraphQLID},
    name: {type: gql.GraphQLString},
    age: {type: gql.GraphQLInt}
  }
})

module.exports = StudentSchema