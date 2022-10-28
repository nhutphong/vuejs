<template>
  <!-- phai code into v-container-->
  <v-container>

    <input v-model="message" placeholder="Nhập thông điệp">
    <p>text: {{ message }}</p>

    <br>
    <textarea v-model="message" placeholder="Nhập văn bản có nhiều dòng"></textarea>
    <br>
    <p style="white-space: pre-line;">textarea: {{ message }}</p>

    <br>
    <p>check 1 lan</p>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox">{{ checked }}</label>

    <br><br>
    <p>check more ...</p>
    <input type="checkbox" id="com-chien-toi" value="Cơm chiên tỏi" v-model="checkedNames">
    <label for="com-chien-toi">Cơm chiên tỏi</label><br>
    <input type="checkbox" id="dot-bi-xao-toi" value="Đọt bí xào tỏi" v-model="checkedNames">
    <label for="dot-bi-xao-toi">Đọt bí xào tỏi</label><br>
    <input type="checkbox" id="canh-rau-rung" value="Canh rau rừng" v-model="checkedNames">
    <label for="canh-rau-rung">Canh rau rừng</label>
    <span>Món đã chọn: {{ checkedNames }}</span>

    <br><br>
    <p>radio</p>
    <input type="radio" id="cac-mon-rau" value="Các món rau" v-model="picked">
    <label for="cac-mon-rau">Các món rau</label><br>
    <input type="radio" id="cac-mon-thit" value="Các món thịt" v-model="picked">
    <label for="cac-mon-thit">Các món thịt</label><br>
    <span>Đã chọn: {{ picked }}</span>

    <br><br>
    <p>select 1</p>
    <select v-model="selected">
    <option disabled value="">Vui lòng chọn món</option>
    <option>Đọt bí xào tỏi</option>
    <option>Canh bông điên điển</option>
    <option>Lẩu nấm</option>
    </select>
    <span>Món đã chọn: {{ selected }}</span>

    <br><br>
    <p>selec more ...</p>
    <select v-model="selected" multiple>
    <option>Đọt bí xào tỏi</option>
    <option>Canh bông điên điển</option>
    <option>Lẩu nấm</option>
    </select><br>
    <span>Món đã chọn: {{ selected }}</span>

    <br><br>
    <select v-model="selected">
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.text }}
      </option>
    </select>
    <br>
    <span>Giá tiền: {{ selected }}</span>

  </v-container>

</template>


<script>
export default {
  name: 'BindModel',
  data () {
    return {
      message: '',
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
  }
}
</script>


<style>

</style>


