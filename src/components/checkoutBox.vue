<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ name }}</h5>
      <p class="card-text">
          {{price}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    name: String,
    price: String
  }
}
</script>

<style>
  .card {
    margin: 10px;
  }

</style>