import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {ApolloProvider} from 'react-apollo'
import client from './client'
import QueryGraphql from './QueryGraphql'
import MutationGraphql from './MutationGraphql'

export default function App() {
  return (
    <ApolloProvider client={client}>
      <View style={styles.container}>
        {/* <QueryGraphql /> */}
        <MutationGraphql />
      </View>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
