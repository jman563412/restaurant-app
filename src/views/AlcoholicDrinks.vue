<template>
  <h1>Entrees</h1>
  <div class="container">
    <div class="row">
      <div v-for="item in entires" :key="item.name" class="col-6">
          <Item foodType="item.foodType" :name="item.name" :image="item.image" :price="item.price" :calories="item.calories" 
          :ingredients="item.ingredients" :allergens="item.allergens"/>
      </div>
    </div>
  </div>
</template>

<script>
import { entires } from '@/assets/data/alcoholicDrinksEntries.js'
import Item from '@/components/Item.vue'

export default {
  name: 'SubMenu',
  components: { Item },
  data() {
    return {
      entires
    }
  }
}
</script>

<style>
  
</style>
