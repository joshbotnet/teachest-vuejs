import Vue from 'vue'

if (process.BROWSER_BUILD) {

  Vue.use(VueMaterial)

  Vue.material.registerTheme({
    default: {
      primary: {
        color: 'indigo',
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
        color: 'orange',
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
        color: 'blue-grey',
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

}
