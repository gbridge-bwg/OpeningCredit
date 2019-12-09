import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from './../components/contents/Main.vue'
import Credit from './../components/contents/Credit.vue'
import Rating from './../components/contents/Rating.vue'
import NonFin from './../components/contents/NonFin.vue'
import LookUp from './../components/contents/LookUp.vue'
import Result from './../components/contents/Result.vue'
import Statistics from './../components/contents/Statistics.vue'
import Strategy from './../components/contents/Strategy.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Main },
    { path: '/credit', component: Credit },
    { path: '/rating', component: Rating },
    { path: '/nonfin', component: NonFin },
    { path: '/lookup', component: LookUp },
    { path: '/result', component: Result },
    { path: '/statistics', component: Statistics },
    { path: '/strategy', component: Strategy }
  ]
});

export default router;