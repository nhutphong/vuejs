<template>
  <div>
    <user>
      <template v-slot="slotProps">
        {{ slotProps.user.first }}
      </template>
    </user>
  </div>
</template>

<script>
import User from '@/components/SlotChild'
export default {
  components: {
    User,
  },
}
</script>
