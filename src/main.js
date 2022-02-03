import Vue from 'vue'
import App from './App.vue'
import Smallgraph from './components/smallgraph.vue';
Vue.use(Smallgraph)
Vue.config.productionTip = false
import VueEllipseProgress from 'vue-ellipse-progress';
Vue.use(VueEllipseProgress);
import VueAnalytics from 'vue-analytics';//and then use it in main.js
import VueHead from 'vue-head'

Vue.use(VueHead)


Vue.use(VueAnalytics, {
  id: 'UA-43668748-1',
  checkDuplicatedScript: true
})


new Vue({
  render: (h) => h(App),

  // Add mounted, or will not perform pre-compilation
  mounted() {
    document.dispatchEvent(new Event('render-event'));
  }
}).$mount('#app');

