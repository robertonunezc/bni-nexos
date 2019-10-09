<template>
  <v-app id="bni-nexos">
    <v-navigation-drawer
    v-model="drawer"
    app
    >
    <v-list dense>
      <v-list-item
      v-for="item in menuItems"
      :key="item.title"
      :to="item.link">
      <v-list-item-action>
        <v-icon>mdi-{{item.icon}}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>{{item.title}}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
           <v-list-item v-if="userIsAuthenticated"
           @click="onLogOut"
      >
      <v-list-item-action>
        <v-icon>mdi-out</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>Salir</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</v-navigation-drawer>

<v-app-bar
app
color="primary"
dark
>
<v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
<v-toolbar-title>
  <router-link to="/" tag="span" style="cursor: pointer;">
    BNI-NEXOS
  </router-link>
</v-toolbar-title>
</v-app-bar>

<v-content>
  <v-container fluid>
    <router-view></router-view>
    <div  class="text-center caption">
      <a href="http://puntoreica.com">Desarrollado por PUNTOREICA</a>
    </div>
  </v-container>
</v-content>
</v-app>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data: () => ({
    drawer: false,
  }),
  computed: {
    menuItems () {
      let menuItems = [

      { icon: 'login', title: 'Entrar', link: '/entrar' },

      ]
      if (this.userIsAuthenticated) {
        menuItems = [
        { icon: 'mdi-new', title: 'Alta miembro', link: '/miembros/nuevo' },
        { icon: 'mdi-lock', title: 'Registrar Administrador', link: '/registrar' }
        ]
      }
      return menuItems
    },
    userIsAuthenticated () {
      return this.$store.getters.getUser !== null 
      && this.$store.getters.getUser !== undefined
      &&  this.$store.getters.getUser != ""     
    }
  },
  methods: {
    onLogOut () {
      this.$store.dispatch('logout')
      this.$route.push('/')
    }
  }
}
</script>
