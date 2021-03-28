<template>
<div class="container-fluid">
  <div class="px-lg-5">
    <div class="row">
      <!-- Gallery item -->
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src="@/assets/img/entrees.jpg" alt="" class="img-fluid card-img-top">
          <div class="p-4">
            <h5> <a href="#" class="text-dark">Entrees</a></h5>
            <br>
            
            <div class="align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
              <p class="mb-0"><span class="font-weight-bold">Browse</span></p>
            </div>
          </div>
        </div>
      </div>
      <!-- End -->

      <!-- Gallery item -->
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src="@/assets/img/sides.jpg" alt="" class="img-fluid card-img-top">
          <div class="p-4">
            <h5> <a href="#" class="text-dark">Sides</a></h5>
            <br>
            
            <div class="align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
              <p class="mb-0"><span class="font-weight-bold">Browse</span></p>
            </div>
          </div>
        </div>
      </div>
      <!-- End -->

      <!-- Gallery item -->
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src="@/assets/img/appetizers.jpg" alt="" class="img-fluid card-img-top">
          <div class="p-4">
            <h5> <a href="#" class="text-dark">Appetizers</a></h5>
            <br>
            
            <div class="align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
              <p class="mb-0"><span class="font-weight-bold">Browse</span></p>
            </div>
          </div>
        </div>
      </div>
      <!-- End -->

      <!-- Gallery item -->
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src="@/assets/img/desserts.jpg" alt="" class="img-fluid card-img-top">
          <div class="p-4">
            <h5> <a href="#" class="text-dark">Desserts</a></h5>
            <br>
            
            <div class="align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
              <p class="mb-0"><span class="font-weight-bold">Browse</span></p>
            </div>
          </div>
        </div>
      </div>
      <!-- End -->

      <!-- Gallery item -->
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src="@/assets/img/non-alcoholic.jpg" alt="" class="img-fluid card-img-top">
          <div class="p-4">
            <h5> <a href="#" class="text-dark">Non-Alcoholic Drinks</a></h5>
            <br>
            
            <div class="align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
              <p class="mb-0"><span class="font-weight-bold">Browse</span></p>
            </div>
          </div>
        </div>
      </div>
      <!-- End -->

      <!-- Gallery item -->
      <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
        <div class="bg-white rounded shadow-sm"><img src="@/assets/img/alcoholic.jpg" alt="" class="img-fluid card-img-top">
          <div class="p-4">
            <h5> <a href="#" class="text-dark">Alcoholic Drinks</a></h5>
            <br>
            
            <div class="align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
              <p class="mb-0"><span class="font-weight-bold">Browse</span></p>
            </div>
          </div>
        </div>
      </div>
      <!-- End -->


    </div>

  </div>
</div>
</template>

<script>

export default {
  data() {
    return {
      itemTypes: [
        { name: 'Entrees', image: '@/assets/img/entrees.jpg' }
      ]
    }
  }
}
</script>

<style>
  span {
    text-align: center;
  }
</style>
