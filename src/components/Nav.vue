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
          :to="item.url">
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
          { title: 'Bind', url: '/bind', icon: 'mdi-domain' },
          { title: 'BindModel', url: '/bind-model', icon: 'mdi-message-text' },
     ]
    }
  },
};
</script>
<style>

</style>
