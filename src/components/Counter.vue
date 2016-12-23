<template>
  <div class="counter-wrapper">
    <md-card md-with-hover md-theme="default">
      <md-card-header>
        <div class="md-title">Counter</div>
        <div class="md-subhead">Session store</div>
      </md-card-header>
      <md-card-content>
        <div class="counter">
          {{ count }}
        </div>
      </md-card-content>
      <md-card-actions>
        <!-- <md-button @click="$store.commit('INCREMENT')">Up</md-button> -->
        <md-button @click="$store.dispatch('incrementAsync')">Up</md-button>
        <md-button @click="$store.commit('DECREMENT')">Down</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  computed: {
    count () {
      return this.$store.state.count
    }
  }
}
</script>

<style lang="sass" scoped>
.counter-wrapper
  margin: 10px auto
  width: 90%
  max-width: 480px

  .counter
    margin: 10px auto
    border-radius: 3px
    width: 40px
    height: 40px
    text-align: center
    line-height: 40px
    background-color: #f0f0f0
    user-select: none

</style>
