import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const Index = () => import('./views/Index.vue')
const Projects = () => import('./modules/projects/Index.vue')
const Error404 = () => import('./views/Error404.vue')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '',
          component: Projects,
        }
      ]
    },
    { 
      path: "*", 
      component: Error404
    }
  ]
})
