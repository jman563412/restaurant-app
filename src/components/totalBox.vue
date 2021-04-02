<template>
  <div class="footer">
      <h1><font size="+20">CHECKOUT</font></h1>
    <div class="card-body">
      <h2 align="Center" class="card3">
        <h5 class="card-title"><font size="+10">Add Special Instructions</font></h5>
              <input class="button4" type="text" v-model="this.$store.state.specialInstructions">
      </h2>
      <h5 class="card-title"><font size="+3"></font></h5>
      <p  align="center" class="card-text"> 
            <button class="button3" v-on:click="computeTip(15)">15%</button>
            <button class="button3" v-on:click="computeTip(20)">20%</button>
            <button class="button3" v-on:click="computeTip(25)">25%</button>
            <input class="button3" type="text" v-model="this.$store.state.tipPercent">
            <font size="+1">Custom Tip</font>
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
  .card {
    margin: 10px;
  }
  .card2 {
    margin: 10px;
    width: 100%;
    text-align: center;
    padding: 15px 32px;
    border:rgb(4, 228, 161);
    background-color:rgb(16, 155, 190);
  }
  .card3 {
    margin: 10px;
    width: 100%;
    text-align: center;
    padding: 15px 32px;
    border:rgb(161, 161, 161);
    background-color:rgb(255, 255, 255);
    display: inline-block;
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
.button4 {
  background-color: #d8d8d8;
  display: inline-block;
  width: 100%;
  border: none;
  color: rgb(31, 31, 31);
  padding: 90px 128px;
  text-align: left;
  vertical-align: left;
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
    text-align: center;
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
.text{
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

</style>