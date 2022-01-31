import Vue from 'vue'
import App from './App.vue'
import Smallgraph from './components/smallgraph.vue';
Vue.use(Smallgraph)
Vue.config.productionTip = false
import VueEllipseProgress from 'vue-ellipse-progress';
Vue.use(VueEllipseProgress);
import vueVimeoPlayer from 'vue-vimeo-player'
Vue.use(vueVimeoPlayer)
 
import VueMeta from 'vue-meta'
Vue.use(VueMeta)


import VueAnalytics from 'vue-analytics';//and then use it in main.js


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

