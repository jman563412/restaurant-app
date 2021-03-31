<template> 
    <div class="container">
    <div class="card3">
      <div v-for="item in this.$store.state.order" v-bind:key="item" class="col-12">
          <checkoutBox :priceFloat="item.priceFloat" :quan="getQuantity(item.name)" :name="item.name" :price="item.price" />
      </div>   
    </div>
    <br>
    <br>
    <totalBox/>
  </div>


</template>

<script>
import checkoutBox from '@/components/checkoutBox.vue'
import totalBox from '@/components/totalBox.vue'
export default {
  components: { checkoutBox, totalBox },
  computer: {
    users() {
      return this.$store.state.order;
    }
  },
  methods: {
    getQuantity(name){
      var i;
      for(i = 0; i < this.$store.state.count; i++){
        if(name == this.$store.state.order[i].name){
          return this.$store.state.quantity[i];
        }
      }
      return 0;
    }
  }

}
</script>

<style>
.card3 {
    margin: 10px;
    width: 100%;
    padding: 15px 32px;
    border:rgb(4, 228, 161);
    background-color:rgb(16, 155, 190);
  }
</style>