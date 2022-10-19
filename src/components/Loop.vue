<template>
<!--

-->

  <!-- phai code into 1 v-container duy nhat -->
    <v-container>
      <h1>phai co :key"unique duy nhat khong trung lap"</h1>
      <h2>khong dung index of array gan :key="index"</h2>
      <p>v-for="obj, index in list" :key="index"</p>
      <li v-for="(obj, index) in list" :key="index">
        {{index}} - {{obj.name}} - {{obj.age}}
      </li>
      <br>

      <p>v-for="({name, age}, index) in list" :key="index"</p>
      <li v-for="({name, age}, index) in list" :key="index">
        {{index}} - {{name}} - {{age}}
      </li>
      <br>

      <p>v-for="(value, key) in myobj" :key="key"</p>
      <li v-for="(value, key) in myobj" :key="key">
        {{key}}: {{value}}
      </li>
      <br>

      <p>loop range</p>
      <p>v-for="n in 10"</p>
      <span v-for="n in 10" :key="n">{{ n }}-</span><br>

      
    </v-container>

</template>

<script>
export default {
  name: 'BindTest', // name: '2word'
  data () {
    return {
      message: 'nguyen chi thong, nguyen thanh dung',
      checked: false,
      checkedNames: [],
      picked: '',
      selected: '',
      list: [
        { name: 'Đọt bí xào tỏi', age: 20},
        { name: 'Canh bông điên điển', age: 50 },
        { name: 'Lẩu nấm', age: 40 }
      ],
      myobj: {
        name: 'nguyen chi thong',
        age: 30,
        city: 'gia lai',
      }

    }
  }, // end data
  methods: {
    reverseMethods () {
      return this.message.split(' ').reverse().join(' ')
    },
    nowMethods () {
      return Date.now()
    },
  }, // end methods
  computed: {
    // computed cac methods ben trong se duoc cached, chi call 1 lan, se ko update, neu state thay doi
    reverseComputed () {
      return this.message.split(' ').reverse().join(' ')
    },

    nowComputed () {
      return Date.now()
    },

  }, // end computed
  watch: {

  } // end watch

}
</script>
<!--
data() {
  return {
    number: 1,
    string: "abc",
  }
}
watch: {
  number(newData) { // es6 syntax
    dat ten phai trung voi ten data, or computed methods moi giam sat duoc
  },
}

-->

<style>

</style>
