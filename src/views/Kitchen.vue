<template>
<!-- For each order in our array of JSON objects (containing order info), we generate an order card-->
<div v-for="order in ordersDict" :key="order">

<KitchenOrderCard :orderDict="order" @close="this.removeCard" v-if="this.isOrderClosed"/>
</div>



</template>

<script>
import KitchenOrderCard from '../components/KitchenOrderCard.vue'

export default {

    data(){
        return {
            //Nested object holding order objects
            ordersDict: {},
            serverResponse: {}
        }
    },

    mounted(){
        //Make call to DB
        this.serverResponse = this.getAllOutstandingOrders();
        this.beginPolling();
    },

methods:{

    //We call this function both on mounted and at intervals to see if any other orders have come in
    getAllOutstandingOrders(){
        fetch('https://us-central1-artful-oxygen-306721.cloudfunctions.net/purchaseConfirmation', {
            
            method: 'POST',

            headers: {
                'Authorization': 'Bearer ' + this.$store.state.id_token,
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({"cmdType": "getOutstandingOrders"})
            })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                //If there is an orderNumber not in our current list used for the KitchenOrderCards, add it, the kitchen adds a new KitchenOrderCard for updated data
                for (Object(order) in data){
                    console.log(order);

                    //Values of ordersDict should just be the actual order objects, which we can compare by orderNumber
                    //If an orderNumber exists in the resposne that's not in our client-side ordersDict, push it on
                    if (!(order["orderNumber"] in (Object.values(this.ordersDict["orderNumber"])))){
                        ordersDict.push(order)
                    }  
                }
        });
    },
    
    beginPolling(){
        //SetInterval, every x seconds call getAllOutstandingOrders
        //Checking to see if any new orders were placed also done inside that function, ordersDict should update automatically
        setInterval(()=>{
        }, 10*1000)
        },

    },

    removeCard(){
        this.isOrderClosed = true;
    }
}
</script>

<style>

</style>