<template>
  <h1>Payment</h1>
  <p>
    <br>
      Special Instructions - {{this.$store.state.specialInstructions}}
    <br>
      Total - ${{computeTotal().toFixed(2)}}
  </p>
</template>

<script>
import {webHooks} from '../../database/webHooks.js'

export default {
     methods: {
      computeTotal(){
        var i;
        var tot = 0;
        for(i = 0; i < this.$store.state.count; i++){
            console.log(this.$store.state.order[i].priceFloat);
            tot = tot + (this.$store.state.order[i].priceFloat * this.$store.state.quantity[i]);
        }
        if(this.$store.state.count == 0){
            return 0;
        }
        tot = tot + (tot * .0825)  + this.$store.state.tip;
        return tot;
        
      },
      computeSubtotal(){
        var i;
        var sub = 0;
        for(i = 0; i < this.$store.state.count; i++){
            sub = sub + this.$store.state.order[i].priceFloat * this.$store.state.quantity[i];
        }
        if(this.$store.state.count == 0){
            return 0;
        }
        return sub;
      },
      computeTip(percent){
          this.$store.state.tipPercent = percent;
          return this.$store.state.tip =  this.computeSubtotal() * this.$store.state.tipPercent/100
      },
      computeTax(){
          return (this.computeSubtotal() * .0825);
      }
  }
}

</script>

<style>

</style>