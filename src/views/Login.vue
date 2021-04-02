<template>
  <div class="container">
      <br>
    <div class="row">
      <div class="col-md-3"></div>
      <div class="col-md-6">
        <h1>Login</h1>
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
          <button type="submit" class="btn btn-primary">Login</button><br><br> 
          <!-- <button type="signup" class="btn btn-primary">SignUp</button><br><br> -->
          <router-link :to="{ path: '/Register' }" class="btn btn-primary">
                    <font >Sign Up</font>
                </router-link><br><br>
          <button type="emplysubmit" class="btn btn-primary">Employ Login</button>
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
