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

        incrementTimeSinceOrder(){
            this.orderTimer = setInterval(()=>{
                this.orderTimer +=10;
            }, 10);
        },

        closeThisOrder(){
            //Send call to HTTP endpoint to remove order from outstandingOrders table
            //Passing in orderId we received back after original DB insert
            
            this.orderClosed = True
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
        orderDict: []
    }
}
</script>

<style>

.close-icon{
    cursor: pointer;
}

</style>