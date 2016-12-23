<template>
  <div class="page">
    <counter></counter>
    <UserAdd></UserAdd>
  </div>
</template>

<script>
import Counter from '../components/Counter'
import UserAdd from '../components/UserAdd'

export default {
  name: 'AddUser',
  components: {
    Counter,
    UserAdd
  }
}

</script>
