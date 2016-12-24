<template>
  <form novalidate @submit.stop.prevent="submit">
    <md-input-container>
      <label for="firstName">First Name</label>
      <md-input v-model="firstName" name="firstName" id="firstName" placeholder="First Name"></md-input>
    </md-input-container>
    <md-input-container>
      <label for="lastName">Last Name</label>
      <md-input v-model="lastName" name="lastName" id="lastName" placeholder="Last Name"></md-input>
    </md-input-container>
    <md-button @click="createUser" class="md-raised" md-theme="default">Create</md-button>
  </form>
</template>

<script>
import gql from 'graphql-tag'

// GraphQL query
const userCreateMutation = gql`
  mutation ($firstName: String, $lastName: String) {
    createUser (firstName: $firstName, lastName: $lastName)  {
      firstName
      lastName
    }
  }
`

// Component def
export default {
  props: {
    firstName: {
      type: String
    },
    lastName: {
      type: String
    }
  },
  methods: {
    createUser () {
      // mutation
      this.$apollo.mutate({
        mutation: userCreateMutation,
        variables: {
          firstName: this.firstName,
          lastName: this.lastName
        }
      }).then(data => {
        console.log('Created user')
      }).catch((error) => {
        // Error
        console.error(error)
      })
    }
  }
}
</script>
