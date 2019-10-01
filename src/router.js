import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import RegisterUser from './views/RegisterUser.vue'
import Member from './views/Member.vue'
import NewMember from './views/NewMember.vue'
import EditMember from './views/EditMember.vue'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/entrar',
    name: 'login',
    component: Login
  },
  {
    path: '/registrar',
    name: 'RegisterUser',
    beforeEnter: AuthGuard,
    component: RegisterUser,

  },
  {
    path: '/miembro/:id',
    name: 'ViewMember',
    props: true,
    component: Member
  },
  {
    path: '/miembro/editar/:id',
    name: 'EditMember',
    props: true,
    beforeEnter: AuthGuard,
    component: EditMember
  },
  {
    path: '/miembros/nuevo',
    name: 'new_member',
    props: true,
    component: NewMember,
    beforeEnter: AuthGuard
  }
    ]
  })
