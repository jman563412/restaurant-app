<template>
  <div class="footer">
      <h1>CHECKOUT</h1>
    <div class="card-body">
      <h5 class="card-title"><font size="+3"></font></h5>
      <p  align="left" class="card-text"> 
            <button class="button3" v-on:click="computeTip(15)">15%</button>
            <button class="button3" v-on:click="computeTip(20)">20%</button>
            <button class="button3" v-on:click="computeTip(25)">25%</button>
            <button class="button3" v-on:click="computeTip(percent)">Custom Tip</button>
      </p>
      <h2 align="Center" class="card2">
            <p align="left">
                <br>
                Sub - ${{computeSubtotal().toFixed(2)}}
                <br>
                Tax - ${{computeTax().toFixed(2)}}
                <br>
                Tip - ${{computeTip(this.$store.state.tipPercent).toFixed(2)}}
                <br>
                <br>
                 ---------------------------------
                 <br>
                 <br>
                Total - ${{computeTotal().toFixed(2)}}
                <br>
                <br>
                <router-link align="right" :to="{ path: '/payment' }" class="button3">
                    <font size="+3">Click to Pay</font>
                </router-link>
                </p>

      </h2>

    </div>
  </div>

</template>

<script>
export default {
  props:{
  },
  methods: {
      computeTotal(){
        var i;
        var tot;
        for(i = 0; i < this.$store.state.count; i++){
            tot = this.$store.state.order[i].priceFloat * this.$store.state.quantity[i];
        }
        //this.$store.state.tip = sub * this.$store.state.tipPercent/100;
        if(this.$store.state.count == 0){
            return 0;
        }
        tot = tot + (tot * .0825)  + this.$store.state.tip;
        return tot;
        
      },
      computeSubtotal(){
        var i;
        var sub;
        for(i = 0; i < this.$store.state.count; i++){
            sub = this.$store.state.order[i].priceFloat * this.$store.state.quantity[i];
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
  .card {
    margin: 10px;
  }
  .card2 {
    margin: 10px;
    width: 100%;
    text-align: left;
    padding: 15px 32px;
    border:rgb(4, 228, 161);
    background-color:rgb(16, 155, 190);
  }
  .button {
  background-color: #4CAF50;
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
.button3 {
  background-color: #e79804;
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
.button2 {
  background-color: #ca3d3d;
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
.footer {
  left: 0;
  bottom: 0;
  width: 100%;
  height: 200px;
  background-color: rgb(221, 221, 221);
  border: rgb(116, 60, 60);
  text-align: center;
}
.box {
    text-align: left;
    height:100px;
    width:40%;
    background-color:rgb(16, 112, 190);

    padding-right: 30px;
    padding-left: 30px;
    border-style: solid;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 10px;            
}

</style>