import React, {useEffect} from 'react'
import { View, Text } from 'react-native'
import { Query } from "react-apollo";
import { gql } from "apollo-boost";


const GET_ALL_STUDENT = gql`
 {
  students {
    id
    name
    age
  }
}
` 

const GET_ONE_STUDENT = gql`
  query Student ($id: ID!) {
    student(id: $id) {
      id,
      name,
      age
    }

  }
`


const QueryGraphql = () => {
  return (
    <Query
      query={GET_ALL_STUDENT}
      variables={{
        id: "5d352ccafcae6d73ebf4d2ee"
      }}
    >
      {
        ({ loading, error, data }) => {
          console.log({
            loading, error, data
          })
          return (
            <View>
              { loading && <Text> Sabar Mas Loading dlu</Text>}
              { !loading && data && <Text>{JSON.stringify(data)}</Text>}
              {!loading && error && <Text>{JSON.stringify(error)}</Text>}
            </View>
          )
        }
      }
    </Query>
  )
}

export default QueryGraphql
