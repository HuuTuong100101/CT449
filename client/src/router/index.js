import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Products from '../views/Product.vue'
import AddProduct from '../views/AddProduct.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },

  {
    path: '/Product',
    name: 'Products',
    component: Products
  },

  {
    path: '/Product/add',
    name: 'AddProduct',
    component: AddProduct
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
