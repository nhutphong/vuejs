<template>
  <div class="todo">
    <h1>todo app</h1>
  </div>
</template>

<script>
// import Nav from './components/NavBar.vue'
// import NavTest from './components/NavTest.vue'

export default {
  name: 'TodoView',
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
      { title: 'Todo', icon: 'mdi-sync', to: '/todo' },
      { title: 'Hook', icon: 'mdi-sync', to: '/hook' },
    ],
    right: null,
  }), //end data

}
</script>
