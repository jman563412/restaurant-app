<template>
 <h1><font size="+5">PAYMENT</font></h1>

 <div v-if="this.$store.state.userSignedIn">
    <totalBox/>
</div>

<div v-if="!this.$store.state.userSignedIn ">Please log in first by selecting the Login tab</div>


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