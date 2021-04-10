<template>
<!-- For each order in our array of JSON objects (containing order info), we generate an order card-->
<div v-for="order in itemsDict" :key="order">

<KitchenOrderCard :orderDict="order"/>
</div>



</template>

<script>
import KitchenOrderCard from '../components/KitchenOrderCard.vue'

export default {

    data(){
        return {
            //For dumping parsed server response
            itemsDict: {}
        }
    },

    mounted(){
        //Make call to DB
        this.serverResponse = this.getAllOutstandingOrders();
        this.beginPolling();
    },

methods:{

    getAllOutstandingOrders(){

        //Send query to HTTP endpoint for all rows in testOutstandingOrders table
        fetch('https://us-central1-artful-oxygen-306721.cloudfunctions.net/getOutstandingOrders',{

        }, {
            'Authorization': 'Bearer ' + this.$store.state.id_token
        }).then(res =>{
            res.json()

        }).then(data => {
            console.log("ORDER INFO:", data);

            //Here we parse returned data for order in data, for item in order (this is a string)

            //Special Instructions is a separate field

            //Also get time ordered, which is a separate field

            //Bind order number to the header value in kitchenordercard
            
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