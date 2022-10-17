<template>
<!--

button tag
<button v-bind:disabled="isButtonDisabled">Hòn Vọng Phu</button>
  attributes: id class name value style href disabled ...
  tuy tags se co nhung attributes khac nhau
  v-bind:<attributes>

  <a v-bind:href="url"> ... </a>
  <a v-on:click="myFunction"> ... </a>

cú pháp đầy đủ
<a v-bind:href="url"> ... </a>

cú pháp rút gọn: dùng dấu hai chấm
<a :href="url"> ... </a>

cú pháp đầy đủ
<a v-on:click="myFunction"> ... </a>

cú pháp rút gọn: dùng kí tự @
<a @click="myFunction"> ... </a>

-->

  <!-- phai code into 1 v-container duy nhat -->
    <v-container>
      
      <p>text: "{{ message }}"</p>
      <p>reverseMethods() text use (methods): "{{ reverseMethods() }}"</p><br>
      <p>reverseComputed text use (computed): "{{ reverseComputed }}"</p><br>

      <p>nowMethods(): {{ nowMethods() }}</p><br>
      <p>nowComputed: {{ nowComputed }}</p><br>
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
      options: [
        { text: 'Đọt bí xào tỏi', value: '50k' },
        { text: 'Canh bông điên điển', value: '30k' },
        { text: 'Lẩu nấm', value: '45k' }
      ],

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
