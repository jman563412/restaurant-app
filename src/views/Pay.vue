<template>
<h1><font size="+5">PAYMENT</font></h1>
    <totalBox/>
</template>

<script>
import totalBox from '@/components/totalBox.vue'
export default {
  components: {totalBox },
  computer: {
    users() {
      return this.$store.state.paymentOrder;
    }
  },

}
</script>