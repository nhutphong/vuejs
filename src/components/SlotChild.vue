<template>
  <span>
    <slot :user="user">
      {{ user.last }}
    </slot>
  </span>
</template>

<script>
export default {
  name: 'HaHa',
  data() {
    return {
      user: {
        first: 'nguyen chi',
        last: 'thong',
      },
    }
  },
}
</script>
