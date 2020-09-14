
const Vue = require('vue');
const App = require('./App/index.vue').default;

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
