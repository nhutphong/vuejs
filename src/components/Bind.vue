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

      <input type="text" v-model="message" placeholder="nhap content vao...">
      <p>text: "{{ message }}"</p>

      <!-- <p>reverseMethods() text use (methods): "{{ reverseMethods() }}"</p><br> -->
      <p>reverseComputed text use (computed): "{{ reverseComputed }}"</p><br>

      <p>nowMethods(): {{ nowMethods() }}</p><br>
      <p>nowComputed: {{ nowComputed }}</p><br>

     <v-text-field
      label="title"
      v-model="obj.title"
    ></v-text-field>
    <p>{{obj.title}}</p>

    <v-text-field
      label="content"
      v-model="obj.content"
    ></v-text-field>
    <p>{{obj.content}}</p>

    </v-container>


</template>

<script>
/*
  thu tu run, computed to watch to methods
*/
export default {
  name: 'BindTest', // name: '2word'
  data () {
    return {
      message: '',
      countM: 0,
      countC: 0,
      countW: 0,
      checked: false,
      checkedNames: [],
      picked: '',
      selected: '',
      options: [
        { text: 'Đọt bí xào tỏi', value: '50k' },
        { text: 'Canh bông điên điển', value: '30k' },
        { text: 'Lẩu nấm', value: '45k' }
      ],
      obj: {
        title:  '',
        content: ''
      },

    } // end return
  }, // end data
  computed: {
    // function se khong co argument
    // computed cac methods ben trong se duoc cached, chi call 1 lan, chi run khi this.message update = change
    reverseComputed () {
      // this.countC++ //Unexpected side effect - error
      // trong computed NOT update=change attributes = field
      // chu yeu get value, in cached,
      /*
        Với computed property, sử dụng chúng khi bạn muốn thao tác với dữ liệu có trong Vue instance, ví dụ như khi bạn muốn lọc một mảng dữ liệu, chuyển đổi dạng dữ liệu...
      */


      console.log(`reverseComputed`)
      return this.message.split(' ').reverse().join(' ')
    },

    nowComputed () {
      //
      return Date.now()
    },

  }, // end computed
  watch: {
    // run khi doi tuong(propName or computedName) giam sat no thay doi
    // ten trung voi propName or computedName function
    // co the update=change prop
    /*
      Xử lí khi dữ liệu thay đổi nhiều, liên tục (VD dễ thấy nhất là thanh tìm kiếm)
    */
    reverseComputed() {
      this.countW++     // ok
      console.log(`watch reverseComputed - ${this.countW}`)
    },
    obj: {
      handler: function () {
        console.log('watch attribute of obj');
      },
      deep: true
    },

  }, // end watch
  methods: {
    //bat ky attribute nao update=change no deu run all function(), khi nao function can pass them argument thi dung, vi luc nao cung run all function in template nen la slow browser
    reverseMethods () {
      this.countM++
      console.log(`reverseMethods - ${this.countM}`)
      return this.message.split(' ').reverse().join(' ')
    },
    nowMethods () {
      return Date.now()
    },
  }, // end methods

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
