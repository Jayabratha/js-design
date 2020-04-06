import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Vue.config.ignoredElements=[
//   'jsd-button',
//   'jsd-input',
//   'jsd-radio',
//   'jsd-radio-chip',
//   'jsd-checkbox',
// ]

new Vue({
  render: h => h(App),
}).$mount('#app')
