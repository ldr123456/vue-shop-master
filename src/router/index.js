import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [

  {
    path: '/',
    name: 'home',
    redirect: 'home',
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
    meta: {
      index: 1,
    },
  },
  {
    path: '/category',
    name: 'category',
    component: () =>
      import('../views/Category.vue'),
    meta: {
      index: 1,
    },
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Cart.vue'),
    meta: {
      index: 1,
    },
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/User.vue'),
    meta: {
      index: 1,
    },
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import(/* webpackChunkName: "detail" */ '../views/Detail.vue'),
    meta: {
      index: 2
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "detail" */ '../views/Login.vue'),
    meta: {
      index: 2
    }
  },
  {
    path: '/product-list',
    name: 'product-list',
    component: () => import(/* webpackChunkName: "product-list" */ '../views/ProductList.vue'),
    meta: {
      index: 2
    }
  },
  {
    path: '/product/:id',
    name: 'product',
    component: () => import(/* webpackChunkName: "product" */ '../views/ProductDetail.vue'),
    meta: {
      index: 2
    }
  },
  {
    path: '/create-order',
    name: 'create-order',
    component: () => import(/* webpackChunkName: "create-order" */ '../views/CreateOrder.vue'),
    meta: {
      index: 2
    }
  },
  {
    path: '/address',
    name: 'address',
    meta: {
      index: 2
    },
    component: () => import(/* webpackChunkName: "address" */ '../views/Address.vue')
  },
  {
    path: '/address-edit',
    name: 'address-edit',
    meta: {
      index: 2
    },
    component: () => import(/* webpackChunkName: "address-edit" */ '../views/AddressEdit.vue')
  },
  {
    path: '/order',
    name: 'order',
    meta: {
      index: 2
    },
    component: () => import(/* webpackChunkName: "order" */ '../views/Order.vue'),
  },
  {
    path: '/setting',
    name: 'setting',
    meta: {
      index: 2
    },
    component: () => import(/* webpackChunkName: "setting" */ '../views/Setting.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
