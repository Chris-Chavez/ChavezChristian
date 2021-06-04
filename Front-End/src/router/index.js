import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AgregarAuto from '../views/AgregarAuto.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/AgregarAuto',
    name: 'AgregarAuto',
    component: AgregarAuto
  },
]

const router = new VueRouter({
  routes
})

export default router
