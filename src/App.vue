<template>
  <v-app id="inspire">
    <v-navigation-drawer
    v-model="drawer"
    app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Vuetify
          </v-list-item-title>
          <v-list-item-subtitle>
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>HomePage</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!-- 
        show content of tung component match voi cac url
      -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
// import Nav from './components/NavBar.vue'
// import NavTest from './components/NavTest.vue'

export default {
  name: 'App',
  components: {
    // Nav,
    // NavTest,
  }, // end components
  data: () => ({
    drawer: null,
    items: [
      { title: 'Home', icon: 'mdi-format-list-checks', to:'/'},
      { title: 'About', icon: 'mdi-help-box', to: '/about' },
      { title: 'Bind', icon: 'mdi-image', to: '/bind'},
      { title: 'BindModel', icon: 'mdi-database', to: '/bind-model' },
      { title: 'Loop', icon: 'mdi-sync', to: '/loop' },
      { title: 'Todo', icon: 'mdi-sync', to: '/toto' },
      { title: 'Slot', icon: 'mdi-sync', to: '/slot' },
      { title: 'Tab', icon: 'mdi-table-large', to: '/tab' },
    ],
    right: null,
  }), //end data

}
</script>
