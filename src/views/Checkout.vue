<template> 
  <h1>Checkout</h1>
    <li v-for="item in this.$store.state.order" v-bind:key="item"> {{item}}</li>
</template>
<script>
</script>

<style>

</style>