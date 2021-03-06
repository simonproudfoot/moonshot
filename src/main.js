import Vue from 'vue'
import App from './App.vue'
import Smallgraph from './components/smallgraph.vue';
Vue.use(Smallgraph)
Vue.config.productionTip = false
import VueEllipseProgress from 'vue-ellipse-progress';
Vue.use(VueEllipseProgress);
 
import VueMeta from 'vue-meta'
Vue.use(VueMeta)

new Vue({
  render: (h) => h(App),
  
  // Add mounted, or will not perform pre-compilation
  mounted() {
    document.dispatchEvent(new Event('render-event'));
  }
}).$mount('#app');

