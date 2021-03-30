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
      <router-link :to="{ path: '/menu/' + foodType}" class="btn btn-primary">
        Add To Cart {{ foodType }}
      </router-link>
    </div>
  </div>
  <!-- <slot name="foodInfo"></slot> -->
</template>

<script>
export default {
  props: {
      image: String,
      name: String,
      price: String,
      calories: String,
      ingredients: Array,
      allergens: Array
  }
}
</script>

<style>
  .card {
    margin: 10px;
  }

</style>