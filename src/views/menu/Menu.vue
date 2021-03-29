<template>
  <h1>Menu</h1>
  <div class="container">
    <div class="row">
      <div v-for="item in itemTypes" :key="item.name" class="col-4">
          <ItemType :image="item.image" :foodType="item.name"/>
      </div>
    </div>
  </div>
</template>

<script>
import { itemTypes } from '@/assets/data/itemTypes.js'
import ItemType from '@/components/ItemType.vue'

export default {
  name: 'Menu',
  components: { ItemType },
  data() {
    return {
      itemTypes
    }
  }
}
</script>

<style>
  
</style>
