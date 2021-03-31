<template>
  <div class="card">
    <img :src="image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">
        {{price}}
      </p>
      <p class="card-text">
        Ingredients - {{ingredients}}
      </p>
      <p class="card-text">
        Allergens - {{allergens}}
      </p>
      <button class="button3" v-on:click="addItemToOrder(name,price,calories,ingredients,allergens,priceFloat)">Add To Order!</button>
    </div>
  </div>
  <!-- <slot name="foodInfo"></slot> -->
</template>

<script>
export default {
  computer: {
    users() {
      return this.$store.state.order;
    }
  },
  props: {
      image: String,     
      name: String,
      price: String,
      calories: String,
      ingredients: Array,
      allergens: Array,
      priceFloat: Number
  },
  methods: {
    addItemToOrder(name,price,calories,ingredients,allergens,priceFloat){

        console.log(name+" Added To Order");
        //Loop through each order
            //if name of item trying to be added is already in the order 
                //at quantity[count] increment

            //else
                //Push new order
                //Push new quantity with value of 1
                //Increment count
        var i;
        var inOrder = 0;
        for(i = 0; i < this.$store.state.count; i++) {
          if(name == this.$store.state.order[i].name){
              this.$store.state.quantity[i]++;
              console.log(this.$store.state.quantity[i]);
              inOrder = 1;
          }
        }
        if(inOrder == 0){
          this.$store.state.order.push(({name,price,calories,ingredients,allergens,priceFloat}));
          this.$store.state.quantity.push(1);
          this.$store.commit('increment')
        }
        
    },
  },
  
}
</script>

<style>
  .card {
    margin: 10px;
  }
  .button3 {
  background-color: #1f7bc7;
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