import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home'
import About from '../views/About'
import Posts from '../views/Posts'
import AddUser from '../views/AddUser'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/posts',
    name: 'posts',
    component: Posts
  },
  {
    path: '/adduser',
    name: 'adduser',
    component: AddUser
  }
]

export default new VueRouter({
  mode: 'history',
  routes
})
