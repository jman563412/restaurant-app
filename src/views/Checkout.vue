<template> 

    <div v-if="!this.$store.state.userSignedIn ">Please log in first by selecting the Login tab</div>
    <div v-if="this.$store.state.userSignedIn" class="container">
    <div class="card3">
      <div>
      <div v-if="this.$store.state.count == 0">
        <font size="+10">NO ITEMS IN ORDER</font>
        </div>
      <div v-for="item in this.$store.state.order" v-bind:key="item" class="col-12">
          <checkoutBox :priceFloat="item.priceFloat" :quan="getQuantity(item.name)" :name="item.name" :price="item.price" />
      </div>   
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
          <h2 v-if="this.$store.state.count > 0" align="Center" class="card3">
        <h5 class="card-title"><font size="+10">Add Special Instructions</font></h5>
              <input class="button4" type="text" v-model="this.$store.state.specialInstructions">
      </h2>
      <div v-if="this.$store.state.count > 0" @click="submitOrder()">
        <p>
          <span class="button3">Click to Send Order</span>
          </p>
          </div>
      <br>
      <br>
      <br>
      </div>
  </div>


</template>

<script>
import checkoutBox from '@/components/checkoutBox.vue'
import totalBox from '@/components/totalBox.vue'
import { inject, toRefs } from "vue";
import { request } from 'node:http';


export default {
  
  components: { checkoutBox, totalBox },

  computer: {
    users() {
      return this.$store.state.order;
    }
  },

  methods: {

    getQuantity(name){
      var i;
      for(i = 0; i < this.$store.state.count; i++){
        if(name == this.$store.state.order[i].name){
          return this.$store.state.quantity[i];
        }
      }
      return 0;
    },

    eraseOrder () {
        var i;
        console.log("count - " + this.$store.state.count);
        for(var i = 0; i < this.$store.state.count; i++){
            this.$store.state.paymentOrder.push(this.$store.state.order[i]);
            this.$store.state.paymentQuantity.push(this.$store.state.quantity[i]);
            this.$store.state.paymentCount++;
        }
        console.log("Payment Count - " + this.$store.state.paymentCount);
        this.$store.state.order = [];
        this.$store.state.quantity = [];
        this.$store.state.specialInstructions = "";
        this.$store.state.count = 0;
        this.$router.push('/orderComplete');  
    },

    //Makes an object of the order items and special instructions, called by submitOrder  
    assembleRequestItems(){
      var orderItems = {};
      let specialInstructions = this.$store.state.specialInstructions;
     
      //Assembling dict of items where key: itemName, value:itemAmount
      for (var item in this.$store.state.order){
        thisItemQuantity = this.getQuantity(item.name);
        orderItems[`${item.name}`] = thisItemQuantity;
      }

      let requestBody = {
        "orderItems": orderItems,
        "specialInstructions": specialInstructions,
        "cmdType": 'purchaseConfirmation'
      }

      return requestBody;
    },

    submitOrder(){

    let requestBody = this.assembleRequestItems();

    fetch('https://us-central1-artful-oxygen-306721.cloudfunctions.net/purchaseConfirmation', {

      method: 'POST',

      headers: {
        'Authorization': this.$store.state.id_token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //This should just return the assigned order number we'll store it in a state var and then start polling for updates
        console.log(data);
        this.$store.state.orderNumber = data.orderNumber;

        //We must wait to erase the order until the DB call returns cause we call the state variable to pass params to the endpoint (so we put it in the callback) 
        this.eraseOrder();
      });
    },

    //Injecting google sign-in into page
    setup(props) {
      const { isSignIn } = toRefs(props);
      const Vue3GoogleOauth = inject("Vue3GoogleOauth");
      const handleClickLogin = () => {};
      return {
        Vue3GoogleOauth,
        handleClickLogin,
        isSignIn
      }
    }
  }
}
</script>

<style>
.card3 {
    margin: 10px;
    width: 100%;
      padding: 15px 32px;
    border:rgb(4, 228, 161);
    background-color:rgb(16, 155, 190);
  }
</style>