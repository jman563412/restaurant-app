<template>
  <h1>Menu</h1>
  <button class="fixedbutton" v-bind:onclick="makeChildMode()">Child Mode</button>
  <div  :class="container">
    <div class="row">
      <div v-for="item in itemTypes" :key="item.name" class="col-4">
          <ItemType :image="item.image" :foodType="item.name"/>
      </div>
    </div>
  </div>


  <br>
  <br>
  <br>
  <br>

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
  },
  methods: {
    makeChildMode(){
      if(this.$store.state.userMode==1){
        this.$store.state.userMode=0;
      }else{
        this.$store.state.userMode=1;
      }
    }
  }
}
</script>

<style>
  .fixedbutton {
    position: fixed;
    bottom: 87%;
    right: 87%; 
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
.fixedbutton:hover {
    position: fixed;
    bottom: 87%;
    right: 87%; 
    background-color: #1f7bc7;
  border: none;
  color: rgb(0, 119, 255);
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
</style>
