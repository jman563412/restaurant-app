<template>
    
    <div v-if="isOrderClosed" class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
        <button type="button" class="btn-close" aria-label="Close" @click="closeThisOrder"></button>
        {{customerName}}
        </div>
      
      <div class="card-body">
          <!-- V-for each item in itemsDict, make one h5 of this type-->
        <h5 v-for="item in orderItemsDict" :key="item" class="card-title">

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
        }
    },
    mounted(){
        this.setTimeOrdered();
        this.setSpecialInstructions();
        this.calculateTimeSinceOrderPlaced();
    },
    methods:{

        calculateTimeSinceOrderPlaced(currentTime){
        //orderTimer = Current time - original time of submission from DB 

            
        },

        //Not sure if using setInterval here will throw an error
        incrementTimeSinceOrder(){
            this.orderTimer = setInterval(()=>{
                this.orderTimer +=10;
            }, 1000);
        },


  //Sends request to endpoint for removing an order
  //All we have to do is pass the order number in the request body
  closeThisOrder(){

    //Building itemsDict to convert to JSON and sent to endpoint to clear the order from the outstandingOrders table (endpoint name = clearOrder)
    //TODO: This might be wrong cause JS doesn't maintain order of arrays, need to convert to dict with key: itemName, value: itemQuantity
    for(i = 0; i < this.$store.state.paymentCount; i++){
            this.$store.state.itemsDict[this.$store.state.paymentOrder[i]] = Number.parseInt(this.$store.state.paymentQuantity[i])
        }

        
        console.log(itemsDict);

        //Then, we make the request to the endpoint
        //We may need to add more request headers
        let requestOptions = {
          
          //Idk if this will work lmao
          method: "GET",

          headers: {
          "Authorization": 'bearer ' + this.$store.state.token_id,
          'Content-Type': 'application/json'
          },

          body: '',

        }

        //Do we need to JSON.stringify the requestOptions, or just the body?
        fetch('https://us-central1-artful-oxygen-306721.cloudfunctions.net/clearOrder', requestOptions.then((success, reject) =>{
          if(reject){
            console.log(Reject.message);
          } else {
            console.log(success);

            //Go back to default screen
            this.$router.push('/');
                }
            })
        )
    },

        setSpecialInstructions(){
            
            indexOfInstructions = this.orderItemsDict.findIndex((dictItem)=>{
                return dictItem.attr1 == "SI"
            });

            this.specialInstructions = this.orderItemsDict[indexOfInstructions];
        },

        setTimeOrdered(){
            
        }
    },
    
    //Any of these will be passed through the tag of the parent component <KitchenOrderCard customerName="" orderItemsDict=""/> tag
    //Accessed in child component like {{ customerName }}
    props:{
        orderDict: {}
    }
}
</script>

<style>

.close-icon{
    cursor: pointer;
}

</style>