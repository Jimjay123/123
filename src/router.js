import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home.vue'),
      redirect: '/home/setting',
      children: [
        {
          path: 'setting',
          name: 'setting',
          component: () => import('views/setting/setting.vue'),
          meta: {
            hidden: true
          }
        },
        {
          path: 'asset',
          name: 'asset',
          component: () => import('views/asset/asset.vue'),
          meta: {
            hidden: false
          }
        }
      ]
    }
  ]
});
