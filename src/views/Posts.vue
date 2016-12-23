<template>
  <div class="page">
    <counter></counter>
    <post-list></post-list>
  </div>
</template>

<script>
import Counter from '../components/Counter'
import PostList from '../components/PostList'

export default {
  name: 'posts',
  components: {
    Counter,
    PostList
  }
}

</script>
