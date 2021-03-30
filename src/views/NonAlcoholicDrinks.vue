<template>
  <h1>Entrees</h1>
  <div class="container">
    <div class="row">
      <div v-for="item in nonAlcoholicDrinksEntries" :key="item.name" class="col-6">
          <Item foodType="item.foodType" :name="item.name" :image="item.image" :price="item.price" :calories="item.calories" 
          :ingredients="item.ingredients" :allergens="item.allergens"/>
      </div>
    </div>
  </div>
</template>

<script>
import { nonAlcoholicDrinksEntries } from '@/assets/data/nonAlcoholicDrinksEntries.js'
import Item from '@/components/Item.vue'

export default {
  name: 'SubMenu',
  components: { Item },
  data() {
    return {
      nonAlcoholicDrinksEntries
    }
  }
}
</script>

<style>
  
</style>
