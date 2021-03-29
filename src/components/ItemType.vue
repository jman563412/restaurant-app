<template>
  <div class="card">
    <img :src="image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">{{ foodType }}</h5>
      <p class="card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, modi omnis, praesentium harum debitis architecto ullam fuga quo.
      </p>
      <router-link :to="{ name: 'SubMenu', params: { submenu: foodType }}" class="btn btn-primary">
        Browse {{ foodType }}
      </router-link>
    </div>
  </div>
  <slot name="foodInfo"></slot>
</template>

<script>
export default {
  props: ['image', 'foodType']
}
</script>

<style>
  .card {
    margin: 10px;
  }

</style>