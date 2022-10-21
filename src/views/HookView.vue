<!-- 
dung ref() code nhanh cho data()
data: () => ({
  name: 'nguyen chi thong',
  age: 35
    }),
 -->

<script setup>
import { ref, onMounted } from 'vue'

// elementDiv = ref="elementDiv"
const elementDiv = ref("data created tu ref()")
const name = ref("nguyen chi thong")
const age = ref(35)

onMounted(() => {
  elementDiv.value // <div>
})
</script>

<template>
  <div ref="elementDiv" class="pa-6">
    <p>hello lifecycle hooks</p>
    <p>{{name}}</p>
    <p>{{age}}</p>
  </div>
</template>
