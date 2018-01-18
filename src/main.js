import Vue from 'vue';
import Router from 'vue-router';
import App from './components/globals/App/App.vue';
import Base from './components/globals/Base/Base.vue';

Vue.use(Router);

new Vue({
  el: '#app',
  render: h => h(App),
  router: new Router({
    routes:
      [
        { path: '/sub', component: { template: '<div>SUB</div>' } },
        { path: '/', component: Base }
      ]
  })
});


