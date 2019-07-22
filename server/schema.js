const gql = require('graphql')
const StudentSchema = require('./type/Student')
const Student = require('./models/Student')

const schema = new gql.GraphQLSchema({
  query: new gql.GraphQLObjectType({
    name: 'TokopediaGraphQlAPi',
    fields: {
      helloWord: {
        type: gql.GraphQLString,
        resolve () {
          return "Kosasih is Back"
        }
      },
      testingIsFun: {
        type: gql.GraphQLBoolean,
        resolve () {
          return false
        }
      },
      student: {
        type: StudentSchema,
        args: {
          id: {type: new gql.GraphQLNonNull(gql.GraphQLID)}
        },
        async resolve(_previous, args, _context) {
          return await Student.findById(args.id)
        }
      },
      students: {
        type: new gql.GraphQLList(StudentSchema),
        async resolve() {
          return await Student.find({})
        }
      }
    }
  }),
  mutation: new gql.GraphQLObjectType({
    name: 'TokopediaMutationGraphql',
    fields: {
      createStudent: {
        type: StudentSchema,
        args: {
          name: {type: gql.GraphQLString},
          age: {type: gql.GraphQLInt}
        },
        async resolve(_parent, args) {
           const student = await Student.create(args)
           return {
             name: student.name
           }
        }
      }
    }
  })
})

module.exports = schema
