<template>
<!-- For each order in our array of JSON objects (containing order info), we generate an order card-->
<div v-for="order in serverResponse" :key="order">

<KitchenOrderCard :orderDict="order"/>
</div>



</template>

<script>
import KitchenOrderCard from '../components/KitchenOrderCard.vue'

export default {
    mounted(){
        //Make call to DB
        this.serverResponse = this.getAllOutstandingOrders();
        this.beginPolling();
    },

methods:{
    getAllOutstandingOrders(){
        //Send query to HTTP endpoint for all rows in testOutstandingOrders table
        fetch('https://us-central1-artful-oxygen-306721.cloudfunctions.net/purchaseConfirmation',{

        }).then(res =>{
            res.json()
        }).then(data => {
            this.serverResponse = data
        }).catch(err =>{
            console.log(err.message)
        })
    },
    
    beginPolling(){
        //Query to check and see if new orders have been added to the DB
        //SELECT * FROM outstandingOrdersTable WHERE orderId NOT LIKE (orderId's in current dict)
        //Emit custom event for kitchen to reload next order
        
    },

},

props:{
    
    //serverResponse should match the format of the return from the DB query (either nested arrays or one array?)
    //Internal array passed to child component along with special instructions and time submitted as separate parameters (KitchenOrderCard)
    serverResponse: [],
    
    }

}

</script>

<style>

</style>