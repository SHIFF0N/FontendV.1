import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: function () { 
        return import('./views/Home.vue')
      }
    },
    {
      path: '/ViewRegister',
      name: 'viewregister',
      component: function () { 
        return import('./views/ViewRegister.vue')
      }
    },
    {
      path: '/ViewCourse',
      name: 'viewcourse',
      component: function () { 
        return import('./views/ViewCourse.vue')
      }
    },
    {
      path: '/ViewCalendar',
      name: 'viewcalendar',
      component: function () { 
        return import('./views/ViewCalendar.vue')
      }
    },
  ]
})
