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
      component: () => import('./views/home.vue'),
      children: [
        {
          path: 'setting',
          component: () => import('./views/setting/setting.vue')
        }
      ]
    }
    // {
    //   path: '/setting',
    //   name: 'setting',
    //   component: () => import('./views/setting/setting.vue')
    // }
  ]
});
