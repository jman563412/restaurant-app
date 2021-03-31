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
      <button v-on:click="addItemToOrder(name)">Add To Order!</button>
    </div>
  </div>
  <!-- <slot name="foodInfo"></slot> -->
</template>

<script>
import orderMixin from '@/assets/data/orderMixin'
export default {
  props: {
      image: String,
      name: String,
      price: String,
      calories: String,
      ingredients: Array,
      allergens: Array,
      listdata: Array
  },
  methods: {
    addItemToOrder(name){
        console.log(name+" Added To Order");
        orderMixin.push(name);
        //console.log(listdata[0]);
    }
  },
  mixins: [orderMixin]
}
</script>

<style>
  .card {
    margin: 10px;
  }

</style>