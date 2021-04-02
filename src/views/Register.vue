<template>
  <div class="container">
      <br>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <h1>Create an Account</h1>
        <br>
        <form>
          <div class="mb-3">
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <h1>Payment Information</h1>
            <div class="mb-3">
            <input
              type="ccnumber"
              class="form-control"
              id="exampleInputCCNum1"
              placeholder="Credit Card Number"
            />
          </div>
          <div class="mb-3">
            <input
              type="ccCSV"
              class="form-control"
              id="exampleInputCCCsv1"
              placeholder="CSV"
            />
          </div>
          <div class="mb-3">
            <input
              type="ccExpDate"
              class="form-control"
              id="exampleInputCCExpDate1"
              placeholder="Experiation Date"
            />
          </div>
          <button type="submit" class="btn btn-primary">Sign Up</button><br><br> 
        </form>
      </div>
      <div class="col-md-3"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
