<template> 
  <h1>Checkout</h1>
    <div class="container">
    <div class="row">
      <div v-for="item in this.$store.state.order" v-bind:key="item" class="col-12">
          <checkoutBox :name="item" :price="item" />
      </div>
    </div>
  </div>
</template>

<script>
import checkoutBox from '@/components/checkoutBox.vue'
export default {
  components: { checkoutBox },
  computer: {
    users() {
      return this.$store.state.order;
    }
  },
}
</script>

<style>

</style>