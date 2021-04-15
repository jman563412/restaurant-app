<template>
    
    <div v-if="isOrderClosed" class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
        <button type="button" class="btn-close" aria-label="Close" @click="closeThisOrder"></button>
        </div>
      
      <div class="card-body">
          <!-- V-for each item in itemsDict, make one h5 of this type-->
        <h5 v-for="item in orderDict" :key="item" class="card-title">

            <br />
        </h5>
        
        <p class="card-text">{{specialInstructions}}</p>
        <p class="card-text">{{timeSinceOrderPlaced}}</p>
      </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            timeSinceOrderPlaced: null,
            isOrderClosed: Boolean,
            orderNumber: orderDict["orderNumber"]
        }
    },

    mounted(){
        this.isOrderClosed = False;
        this.setTimeOrdered();
        this.setSpecialInstructions();
        this.calculateTimeSinceOrderPlaced();
    },
    methods:{

        //Sends request to endpoint for removing an order
        //Order number passed in request body
        buildRequestOptions(){

                let requestOptions = {
                
                //Idk if this will work lmao
                method: "POST",

                headers: {
                "Authorization": 'Bearer ' + this.$store.state.token_id,
                'Content-Type': 'application/json'
                },

                body: JSON.stringify ({
                    "cmdType": "eraseOrder",
                    "orderNumber": this.orderNumber
                })
            }
        },
        
        //For closing out an order
        closeThisOrder(){

            let requestOptions = this.buildRequestOptions();

            //First we make the request to delete the order from the testOutstandingOrders table
            fetch('https://us-central1-artful-oxygen-306721.cloudfunctions.net/purchaseConfirmation', requestOptions)
            .then((response)=>{
                return response.json()
            }).then((data)=>{
                console.log(data);

                //By emitting this event the order card is closed in the main Kitchen component
                this.$emit('close');
            })
        },
        
        setSpecialInstructions() {
            
            //Might need to access in a different way
            indexOfInstructions = this.orderItemsDict.findIndex((dictItem)=>{
                return dictItem.attr1 == "specialInstructions"
            });

            this.specialInstructions = this.orderDict[indexOfInstructions];
        },
    },
    
    //Any of these will be passed through the tag of the parent component <KitchenOrderCard customerName="" orderItemsDict=""/> tag
    props:{
        orderDict: {},

        //DON"T USE THE STATE VAR HERE
        specialInstructions: String,
        
    }
}
</script>

<style>

.close-icon{
    cursor: pointer;
}

</style>