<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title"><font size="+4">{{ name }}</font></h5>
      <p class="card-text">
          <br>
        <button class="button2" v-on:click="decrementQuan(name)">-</button> &emsp; 
        <font size="+2">Quantity  - {{ quan }}</font>
        &emsp;
        <button class="button" v-on:click="incremenetQuan(name)">+</button>
        <br>
        <br>
        <font size="+2">Price - ${{ priceFloat * quan}}</font>
      </p>

    </div>
  </div>

</template>

<script>
export default {
  props:{
    name: String,
    price: String,
    quan: Number,
    priceFloat: Number
  },
  methods: {
      incremenetQuan(name){
        var i;
        for(i = 0; i < this.$store.state.count; i++){
            if(name == this.$store.state.order[i].name){
                this.$store.state.quantity[i]++;
            }
        }
        return 0;
      },
      decrementQuan(name){
        var i;
        for(i = 0; i < this.$store.state.count; i++){
            if(name == this.$store.state.order[i].name){
                this.$store.state.quantity[i]--;
            }
        }
        return 0;
      }
  }
}
</script>

<style>
  .card {
    margin: 10px;
  }
  .button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.button2 {
  background-color: #ca3d3d;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

</style>