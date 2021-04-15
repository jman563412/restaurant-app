<template>
  <h1>Payment</h1>

  <button @click="purchaseConfirmation">Click here To Make Payment</button>
</template>

<script>
import {webHooks} from '../../database/webHooks.js'

export default {
components: {

},

data(){

  return{

  }
},
methods: {

  //This method is used to store the order as {itemName:itemCount, itemName, itemCount, SI:special instructions go here} as a string in the outstandingOrders table
  //Insert into DB will either return order number or we query for it where the string matches to get it
  //Then when we call from the DB, we unpack the string and display on the kitchen menu
  buildOrderString(){
        let orderString = '{'
        for (let i = 0; i < this.$store.state.count; i++){
          let itemName = this.$store.state.order[i].name;
          let itemQuantity = this.$store.state.quantity[i];
          orderString = orderString + itemName + ":" + itemQuantity + " ";
        }
        
        //How to get special instructions TODO: add here
        // orderString = orderString + "SI:" + specialInstructions
        orderString = orderString + "}";
        console.log("orderString: " + orderString);
        return orderString;
  },

  buildOrderDict(){
    
    let orderDict = [];
    for (let i = 0; i < this.$store.state.count; i++){
          let itemName = this.$store.state.order[i].name;
          let itemQuantity = this.$store.state.quantity[i];
          orderdict.push({
            key: itemName,
            value: itemQuantity
          })
        }
        return orderDict;
  },

  purchaseConfirmation(){

      //Instantiate DB connection
      let dbConnection = new DBOperations();

      //Sends info as a string to outstanding orders table
      //Kitchen page downloads order string from DB and parses onto screen
      dbConnection.addOutstandingOrder(this.buildOrderString(), specialInstructions);

      //Increment the inventory table (itemsList) in the DB
      dbConnection.incrementItemsList(this.buildOrderDict());
      
      //We must end the connection after any time we instantiate the class
      dbConnection.end();
    }
}
}

</script>

<style>

</style>