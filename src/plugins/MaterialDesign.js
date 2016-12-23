import Vue from 'vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)

Vue.material.registerTheme({
  default: {
    primary: {
      color: 'deep-purple',
      hue: 'A200'
    },
    accent: {
      color: 'pink',
      hue: 'A200'
    },
    warn: {
      color: 'red',
      hue: 'A200'
    },
    background: {
      color: 'white',
      hue: 'A200'
    }
  },
  dark: {
    primary: {
      color: 'deep-purple',
      hue: 'A200'
    },
    accent: {
      color: 'pink',
      hue: 'A200'
    },
    warn: {
      color: 'red',
      hue: 'A200'
    },
    background: {
      color: 'white',
      hue: 'A200'
    }
  },
  light: {
    primary: {
      color: 'yellow',
      hue: 'A200'
    },
    accent: {
      color: 'pink',
      hue: 'A200'
    },
    warn: {
      color: 'red',
      hue: 'A200'
    },
    background: {
      color: 'white',
      hue: 'A200'
    }
  }
})
