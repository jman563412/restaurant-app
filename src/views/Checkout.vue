<template> 
    <div class="container">
    <div class="card3">
      <div v-if="this.$store.state.count == 0">
        <font size="+10">NO ITEMS IN ORDER</font>
        </div>
      <div v-for="item in this.$store.state.order" v-bind:key="item" class="col-12">
          <checkoutBox :priceFloat="item.priceFloat" :quan="getQuantity(item.name)" :name="item.name" :price="item.price" />
      </div>   
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
          <h2 v-if="this.$store.state.count > 0" align="Center" class="card3">
        <h5 class="card-title"><font size="+10">Add Special Instructions</font></h5>
              <input class="button4" type="text" v-model="this.$store.state.specialInstructions">
      </h2>
      <div v-if="this.$store.state.count > 0" @click="eraseOrder()">
        <p>
          <span class="button3">Click to Send Order</span>
          </p>
          </div>
      <br>
      <br>
      <br>
      <br>
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
    },
    eraseOrder () {
        var i;
        console.log("count - " +this.$store.state.count);
        for(var i = 0; i < this.$store.state.count; i++){
            this.$store.state.paymentOrder.push(this.$store.state.order[i]);
            this.$store.state.paymentQuantity.push(this.$store.state.quantity[i]);
            this.$store.state.paymentCount++;
        }
        console.log("Payment Count - "+this.$store.state.paymentCount);
        this.$store.state.order = [];
        this.$store.state.quantity = [];
        this.$store.state.specialInstructions = "";
        this.$store.state.count = 0;
        this.$router.push('/orderComplete');
        
    },
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