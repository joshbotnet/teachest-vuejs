import Vue from 'vue'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(VueMaterial)

Vue.material.registerTheme({
  default: {
    primary: {
      color: 'deep-purple',
      hue: 'A400'
    },
    accent: {
      color: 'pink',
      hue: 'A200'
    },
    warn: {
      color: 'red',
      hue: 'A400'
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
    }
  }
})

Vue.material.setCurrentTheme('default')
