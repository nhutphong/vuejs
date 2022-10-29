
<script setup>

import { ref, onMounted } from 'vue'

let time = ref(new Date())

const updateTime = () => {
  // new vuejs 3
  // khi update phai .value
  time.value = new Date().toLocaleTimeString()
}

// lifecycle hook
onMounted(() => {
  var timeInterval = setInterval(updateTime, 1000)
})


</script>


<template>

  <v-container>

    <p>{{time}}</p>

  </v-container>

</template>


// export default {

//   data() { return { time: "" } },
//   mounted() { 
//     var timeInterval = setInterval(this.updateTime, 1000);
//   },
//   methods: {
//     updateTime() {
//       this.time = new Date().toString("hh:mm:ss tt");
//     }
//   }
// }