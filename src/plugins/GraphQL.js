import Vue from 'vue'

import ApolloClient, { createNetworkInterface, addTypename } from 'apollo-client'
import VueApollo from 'vue-apollo'

// Create the apollo client
const apolloClient = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://mainbox.io:4000/graphql',
    transportBatching: true
  }),
  queryTransformer: addTypename,
  dataIdFromObject: r => r.id
})

// Install the vue plugin
Vue.use(VueApollo, {
  apolloClient
})
