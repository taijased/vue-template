import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)


const Index = () => import('./views/Index.vue')

const IndexProjects = () => import('./modules/projects/Index.vue')
const AllProjects = () => import('./modules/projects/views/AllProjects.vue')
const AddNewProject = () => import('./modules/projects/views/AddNewProject.vue')
const OpenProject = () => import('./modules/projects/views/OpenProject.vue')
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
          component: IndexProjects,
          children: [
            {
              path: '',
              component: AllProjects,
            },
            {
              path: '/project/:aliase',
              component: OpenProject,
            },
            {
              path: '/addnewproject',
              component: AddNewProject,
            } 
          ]
        }
      ]
    },
    { 
      path: "*", 
      component: Error404
    }
  ]
})
