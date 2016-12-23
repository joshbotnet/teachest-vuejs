<template>
  <div id="app">
    <md-whiteframe md-tag="md-toolbar" md-elevation="2" md-theme="default" class="md-dense">
      <div class="md-toolbar-container">
        <md-button class="md-icon-button" @click="toggleLeftSidenav">
          <md-icon>menu</md-icon>
        </md-button>
        <h2 class="md-title">TeaChest VueJS App v0.1</h2>

        <span style="flex: 1"></span>

        <md-button class="md-icon-button">
          <md-icon>search</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>view_module</md-icon>
        </md-button>

        <md-button class="md-fab md-mini md-fab-bottom-center">
          <md-icon>add</md-icon>
        </md-button>
      </div>
    </md-whiteframe>

    <md-sidenav md-theme="dark" class="md-left" ref="leftSidenav">
      <md-toolbar class="md-account-header">
        <md-list class="md-transparent">
          <md-list-item class="md-avatar-list">
            <md-avatar class="md-large">
              <img src="https://placeimg.com/64/64/people/8" alt="People">
            </md-avatar>

            <span style="flex: 1"></span>

            <md-avatar>
              <img src="https://placeimg.com/40/40/people/3" alt="People">
            </md-avatar>

            <md-avatar>
              <img src="https://placeimg.com/40/40/people/4" alt="People">
            </md-avatar>
          </md-list-item>

          <md-list-item>
            <div class="md-list-text-container">
              <span>John Doe</span>
              <span>johndoe@email.com</span>
            </div>

            <md-button class="md-icon-button md-list-action">
              <md-icon>arrow_drop_down</md-icon>
            </md-button>
          </md-list-item>
        </md-list>
      </md-toolbar>

      <md-list>
        <md-list-item @click="$refs.sidenav.toggle()">
          <router-link :to="{ name: 'home' }"><md-icon>start</md-icon> <span>Home</span></router-link>
        </md-list-item>

        <md-list-item @click="$refs.sidenav.toggle()">
          <router-link :to="{ name: 'about' }"><md-icon>start</md-icon> <span>About</span></router-link>
        </md-list-item>

        <md-list-item @click="$refs.sidenav.toggle()">
          <router-link :to="{ name: 'posts' }"><md-icon>start</md-icon> <span>Posts</span></router-link>
        </md-list-item>

        <md-list-item @click="$refs.sidenav.toggle()">
          <router-link :to="{ name: 'adduser' }"><md-icon>start</md-icon> <span>Add User</span></router-link>
        </md-list-item>

        <md-list-item @click="$refs.sidenav.toggle()">
          <md-icon>insert_drive_file</md-icon> <span>My files</span>
        </md-list-item>

        <md-list-item @click="$refs.sidenav.toggle()">
          <md-icon>people</md-icon> <span>Shared with me</span>
        </md-list-item>

        <md-list-item @click="$refs.sidenav.toggle()">
          <md-icon>access_time</md-icon> <span>Recent</span>
        </md-list-item>

        <md-list-item @click="$refs.sidenav.toggle()">
          <md-icon>start</md-icon> <span>Starred</span>
        </md-list-item>

        <md-list-item @click="$refs.sidenav.toggle()">
          <md-icon>delete</md-icon> <span>Trash</span>
        </md-list-item>
      </md-list>
    </md-sidenav>
    <router-view></router-view>
    <md-bottom-bar class="vuefooter">
      <md-bottom-bar-item md-icon="history">Recents</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="favorite" md-active>Favorites</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>
<script>
export default {
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    }
  }
}
</script>
<style lang="sass">
body
  margin: 0
  font-size: 2rem

.page
  text-align: center
  min-height: 900px
  code
    background-color: #f0f0f0
    padding: 3px 5px
    border-radius: 2px

body
  margin: 0
  padding: 0

ul
  padding-left: 20px

ul li
  list-style: none

ul li span
  color: #999
  margin-right: 10px

.md-card
  h2
    margin: 0

#app
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  display: flex
  flex-flow: column
  position: relative
  overflow: hidden
  z-index: 1

  .md-button.md-fab.md-fab-bottom-center
    bottom: -50%

  .md-list
    overflow: auto

  .md-list-action
    .md-icon
      color: rgba(#000, .26)

  .md-avatar-icon
    .md-icon
      color: #fff !important

  .md-toolbar
    margin-bottom: 20px

  .md-sidenav.md-active
    .md-sidenav-content
      background-color: #fff
      color: rgba(0, 0, 0, .87)

  .md-sidenav
    .md-list-text-container
      > :nth-child(2)
        color: rgba(#fff, .54)

  .md-account-header
    .md-list-item:hover
      .md-button:hover
        background-color: inherit

    .md-avatar-list
      .md-list-item-container:hover
        background: none !important

</style>
