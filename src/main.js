import Vue from 'vue';
import Router from 'vue-router';
import App from './components/globals/App/App.vue';
import Base from './components/globals/Base/Base.vue';
import Top from './components/pages/top/Top.vue';
import Sample1 from './components/pages/sample1/Sample1.vue';

Vue.use(Router);

new Vue({
  el: '#app',
  render: h => h(App),
  router: new Router({
    routes:
      [
        {
          path: '/',
          component: Base,
          children: [
            {
              path: '/',
              component: Top
            },
            {
              path: '/sample1',
              component: Sample1
            }
          ]
        }
      ]
  })
});


