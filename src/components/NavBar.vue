<template>
  
  <v-container>

    <v-toolbar color="yellow">

      <v-toolbar-items >
        <v-btn
          :to="homePage">Home
          <v-icon left >mdi-dialpad</v-icon>
          
        </v-btn>

        <v-btn

          v-for="item in menuItems"
          :key="item.title"
          :to="item.to">
          <v-icon left darken-2>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    
  </v-container>

</template>

<script>
//import HelloWorld from "./components/HelloWorld";

export default {
  name: "NavBar",
  data(){
    return {
      appTitle: 'Home',
      homePage:'/',
      sidebar: false,
      menuItems: [
          { title: 'Bind', to: '/bind', icon: 'mdi-domain' },
          { title: 'BindModel', to: '/bind-model', icon: 'mdi-message-text' },
          { title: 'Loop', to: '/loop', icon:'mdi-domain'}
     ]
    }
  },
};
</script>
<style>

</style>
