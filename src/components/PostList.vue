<template>
  <md-list class="md-dense md-double-line" md-theme="default">
    <template v-if="loading > 0">
      <md-list-item>
        <h2>Loading...</h2>
      </md-list-item>
    </template>
    <template v-else>
      <md-subheader>Posts</md-subheader>
      <md-list-item v-for="post in sortedPosts" :key="post.id">

        <md-avatar class="md-avatar-icon">
          <md-icon>insert_drive_file</md-icon>
        </md-avatar>

        <div class="md-list-text-container">
          <span>{{ post.title }}</span>
          <p>{{ post.user.firstName }} {{ post.user.lastName }}</p>
        </div>

        <md-button class="md-icon-button md-list-action">
          <md-icon>info</md-icon>
        </md-button>

      </md-list-item>
    </template>
  </md-list>
</template>

<script>
import gql from 'graphql-tag'

// GraphQL query
const postsQuery = gql`
  query allPosts {
    posts {
      id
      title
      content
      user {
        id
        firstName
        lastName
      }
    }
  }
`

// Component def
export default {
  // Local state
  data: () => ({
    posts: [],
    loading: 0
  }),
  // Apollo GraphQL
  apollo: {
    // Local state 'posts' data
    posts: {
      query: postsQuery,
      loadingKey: 'loading'
    }
  },
  // Computed properties
  computed: {
    sortedPosts () {
      return this.posts.sort((x, y) => y.id - x.id)
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
