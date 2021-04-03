<template>
  <div class="footer">
      <h1><font size="+20"></font></h1>
    <div class="card-body">
      <h5 class="card-title"><font size="+3"></font></h5>
      <p  align="left" class="card-text"> 
            <button class="button3" v-on:click="computeTip(15)">15%</button>
            <button class="button3" v-on:click="computeTip(20)">20%</button>
            <button class="button3" v-on:click="computeTip(25)">25%</button>
            <input class="button3" type="text" v-model="this.$store.state.tipPercent">
            <font size="+1"> Enter Percent</font>
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
                {{Discount()}}
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
      Discount(){
        if(Math.floor(Math.random() * 3) + 1 == 2){
          alert("Congratulations you have won a free dessert!!");
        }
     },
      computeTotal(){
        var i;
        var tot = 0;
        console.log(this.$store.state.paymentCount);
        for(i = 0; i < this.$store.state.paymentCount; i++){
            console.log(this.$store.state.paymentOrder[i].priceFloat);
            tot = tot + (this.$store.state.paymentOrder[i].priceFloat * this.$store.state.paymentQuantity[i]);
        }
        if(this.$store.state.paymentCount == 0){
            return 0;
        }
        tot = tot + (tot * .0825)  + this.$store.state.tip;
        console.log("Order item 1  " + this.$store.state.paymentOrder[0] );
        console.log(2);
        return tot;
        
      },
      computeSubtotal(){
        var i;
        var sub = 0;
        for(i = 0; i < this.$store.state.paymentCount; i++){
            sub = sub + this.$store.state.paymentOrder[i].priceFloat * this.$store.state.paymentQuantity[i];
        }
        if(this.$store.state.paymentCount == 0){
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
    background-color:rgb(255, 255, 255);
  }
  .card3 {
    margin: 10px;
    width: 100%;
    text-align: center;
    padding: 15px 32px;
    border:rgb(255, 255, 255);
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
  background-color: #ffffff;
  display: inline-block;
  width: 100%;
  border: none;
  color: #353535;
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
    background-color:rgb(255, 255, 255);

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
