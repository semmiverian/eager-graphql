import React from 'react'
import { View, Text, Button } from 'react-native'
import { gql } from "apollo-boost";
import { Mutation } from "react-apollo";

const ADD_STUDENT = gql`
  mutation ADD_STUDENT($name: String, $age: Int) {
    createStudent(name: $name, age: $age) {
      id,
      name,
      age
    }
  }
`

const MutationGraphql = () => {
  return (
    <Mutation
      mutation={ADD_STUDENT}
    >
      {
        (addStudent, {data}) => {
          console.log('ini data', data)
          return <Button title="Pukul aku mas"
            onPress={() => addStudent({
              variables: {
                name: 'Stephanie',
                age: 15
              }
            })} /> 
        }
      }

    </Mutation>
  )
}

export default MutationGraphql
