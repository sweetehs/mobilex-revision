import Vue from 'vue'
import Router from 'vue-router'
import Editor from 'Wrapper/pages/editor'
import List from 'Wrapper/pages/list'
import Register from 'Wrapper/pages/register'
import Login from 'Wrapper/pages/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/editor/:id',
      name: 'editor',
      component: Editor
    },
    {
      path: '/list',
      name: 'list',
      component: List
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
