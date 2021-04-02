<!--This payment form was created bu Kabir Bhatia and was used from bbboostrap.com -->

<template>
  <h1>Payment</h1>
  <div class="container-fluid">
    <div class="row d-flex justify-content-center">
        <div class="col-sm-12">
            <div class="card5 mx-auto">
                <p class="heading"><font size="+2">Payment Details</font></p>

                <form class="card-details ">
                    <div class="form-group mb-0">
                        <p class="text-warning mb-0">Card Number</p><br> <input type="text" name="card-num" placeholder="1234 5678 9012 3457" size="19" id="cno" minlength="16" maxlength="16">
                    </div>
                    <div class="form-group">
                        <p class="text-warning mb-0">Cardholder's Name</p> <input type="text" name="name" placeholder="Name" size="17">
                    </div>
                    <div class="form-group pt-2">
                        <div class="row d-flex">
                            <div class="col-sm-4">
                                <p class="text-warning mb-0">Expiration</p> <input type="text" name="exp" placeholder="MM/YYYY" size="7" id="exp" minlength="7" maxlength="7">
                            </div>
                            <div class="col-sm-3">
                                <p class="text-warning mb-0">Cvv</p> <input type="password" name="cvv" placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3">
                            </div>
                            <router-link align="right" :to="{ path: '/paymentComplete' }" class="button3">
                              <font size="+3">></font>
                            </router-link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

  <div class="ReviewBox">  
    <label ><font size="+2">Write a Review</font></label>
    <br>
    <textarea id="{{this.$store.state.review}}" v-model="this.$store.state.review" rows="10" cols="100">
      </textarea>
      <br>
      <button class="btn btn-primary" type="submit">Submit</button>   
  </div>
  <br>

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
.card5 {
    border: none;
    background-color: white;
    max-width: 600px;
    border-radius: 15px;
    margin: 150px 0 150px;
    padding: 50px;
    padding-bottom: 50px !important
}

.heading {
    color: #353535;
    font-size: 14px;
    font-weight: 500
}


img:hover {
    cursor: pointer
}

.text-warning {
    font-size: 12px;
    font-weight: 500;
    color: #cf9e2a !important
}

#cno {
    transform: translateY(-10px)
}

input {
    border-bottom: 1.5px solid #E8E5D2 !important;
    font-weight: bold;
    border-radius: 0;
    border: 0
}

.form-group input:focus {
    border: 0;
    outline: 0
}

.col-sm-5 {
    padding-left: 90px
}
.submit {
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
.ReviewBox{
  border: none;
}
</style>
