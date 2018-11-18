import Vue from 'vue'
import App from './App.vue'
import VueFire from 'vuefire'
import VueRouter from 'vue-router'
import routes from './routes'
import NProgress from 'nprogress'
import '../node_modules/nprogress/nprogress.css'

Vue.use(VueFire)
Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({ mode: 'history', routes: routes});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
