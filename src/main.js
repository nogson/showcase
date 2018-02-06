import Vue from 'vue';
import Router from 'vue-router';
import App from './components/globals/App/App.vue';
import Base from './components/globals/Base/Base.vue';
import Top from './components/pages/top/Top.vue';
import Sample1 from './components/pages/sample1/Sample1.vue';
import Sample2 from './components/pages/sample2/Sample2.vue';
import Sample3 from './components/pages/sample3/Sample3.vue';
import Sample4 from './components/pages/sample4/Sample4.vue';
import Sample5 from './components/pages/sample5/Sample5.vue';
import Sample6 from './components/pages/sample6/Sample6.vue';



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
            },
            {
              path: '/sample2',
              component: Sample2
            },
            {
              path: '/sample3',
              component: Sample3
            },
            {
              path: '/sample4',
              component: Sample4
            },
            {
              path: '/sample5',
              component: Sample5
            },
            {
              path: '/sample6',
              component: Sample6
            }
          ]
        }
      ]
  })
});


