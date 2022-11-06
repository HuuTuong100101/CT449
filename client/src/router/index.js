import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Products from '../views/Product.vue'
import AddProduct from '../views/AddProduct.vue'
import EditProduct from '../views/EditProduct.vue'
import Order from '../views/Order.vue'

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
    component: Products,
  },

  {
    path: '/Product/add',
    name: 'AddProduct',
    component: AddProduct
  },

  {
    path: '/Product/edit/:id',
    name: 'EditProduct',
    component: EditProduct
  },

  {
    path: '/Order',
    name: 'Order',
    component: Order
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
