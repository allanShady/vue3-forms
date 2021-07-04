import { createApp } from 'vue'
import App from './App.vue'
// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'

//TODO: Fix error require is not defined in order to use the commented code for auto the import
// const requireComponent = require.context(
//     './components',
//     false,
//     /Base[A-Z]\w+\.(vue|js)$/
// )

// const app = createApp(App)

// requireComponent.keys().forEach(fileName => {
//     const componentConfig = requireComponent(fileName)

//     const componentName = upperFirst(
//         camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1'))
//     )

//     app.component(componentName, componentConfig.default || componentConfig)
// })

// app.mount('#app')

createApp(App).mount('#app')