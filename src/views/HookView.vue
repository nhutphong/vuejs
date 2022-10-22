<!-- 

state:
  data() { attributes: 'values'}
  props: ['argument cho component']
  methods: { function, fun2, func3, ...}
  compouted: {func,f2,f3, ... not argument} // khi call giong attribute=property
  watche: {f1,f2, ... ten function = ten attributes}
  emit:
    binh thuong: parent component send data cho child component qua props
    chieu nguoc lai, phai dung $emit event

    // UserDetail.vue
    changeAge () {
        this.age = 24
        this.$emit('ageWasUpdated', this.age) // $event=this.age
    },

    // User.vue
    <button @click="resetAge">Reset tuoi</button>
    <app-user-detail :age="age" @ageWasUpdated="age = $event"></app-user-detail>
    // @ageWasUpdated="age = $event" // assignment "age = $event"

    // Thêm method resetAge trong script
    methods: {
        resetAge () {
            this.age = 23
        }
    }

  expose: ['publicMethods', ...]
    export default {
      // only `publicMethod` will be available on the public instance
      expose: ['publicMethod'],
      methods: {
        publicMethod() {
          // ...
        },
        privateMethod() {
          // ...
        }
      }
    }



lifecycle hook
  befoceCreate và created -> sử dụng setup()
  beforeMount              -> có thể sử dụng onBeforeMount (Composition)
  mounted                 -> có thể sử dụng onMounted (Composition)
  update                 -> có thể sử dụng onUpdate(Compostion)
  beforeDestroy          -> beforeUnmoute và onBeforeUnmoute
  destroyed               ->unMouted và onUnMounted


// run trước cả data(){} nên NOT access attributes 
beforeCreate (){
  console.log(this.name) //error
  this.newVar = 'xin chao vuejs' //ok, co the new var
}

created(){
  // Nên dùng axios fetch data từ Django restfull ở đây
  // access ok
  console.log(this.message)
// NOT access template //error 
console.log(document.getElementById('my-text').innerHTML
}


beforeMount() {
  console.log(`this.$el sẽ là undefined ở beforeMount`)
// NOT access template 
console.log(document.getElementById('my-text').innerHTML)
,}

mounted() {
  //Access ok data template DOM
  console.log(this.$el)
console.log(document.getElementById('my-text').innerHTML)
 }


// new vuejs 3
// Các bạn chú ý là các event sẽ luôn được gọi trước hooks nhé, ví dụ onMounted được gọi trước mounted, và onUnmounted gọi trước unmounted,...

import { onMounted, onUnmounted, onErrorCaptured } from "vue";
{ ref, computed, }
// cac new events deu phai code in function setup()

export default {
  setup() {

    const root = ref(null)
    onBeforeMount(() => { // not access template
      console.log(root.value)
    })

    const root2 = ref(null)
    onMounted(() => { //access template ok
      console.log(root.value)
    }),


    const count = ref(0);
    const val = ref(0);
    onBeforeUpdate(() => {
        count.value +=1;
        console.log(count.value);
    })
    onUpdated(() => {
      console.log(val.value);
    });


    const root = ref(null)
    const count = ref(0);
    const val = ref(0);
    onBeforeUnmount(() => {
        root.value = null;
        delete count.value
    });

    return {
      root, root2, count, val
    } // return of setup

  }, //end setup
  beforeMount() {
    console.log(this)
    // NOT access template 
    console.log(document.getElementById('my-text').innerHTML)
  ,}, // end

  mounted() {
    console.log(this.$el)
  }, //end mounted


  beforeUnmount() {
    console.log(this.count)
    this.count == null;
    delete this.count
  }, //end beforeUnmount

  unmounted() {
    console.log(this.count.value);
  }, //end unmounted

}





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
