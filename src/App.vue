<template>
  <div id="nav">
    <router-link :to="{ name: 'Menu' }">Menu</router-link>
    <router-link :to="{ name: 'Games' }">Games</router-link>
    <router-link :to="{ name: 'Music' }">Music</router-link>
    <router-link :to="{ name: 'Checkout' }">Order</router-link>
    <router-link :to="{ name: 'Help' }">Help</router-link>
    <router-link :to="{ name: 'Refill' }">Refill</router-link>
    <router-link :to="{ name: 'Login' }">Login</router-link>
    <router-link :to="{ name: 'Pay' }">Pay</router-link>
  </div>
  <router-view/>
</template>
<script>
</script>

<style>
body {
  background-color: #ddd;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: white;
  background: crimson
}

.navbar .navbar-nav .nav-link {
    color: #000000;
    font-size: 1.1em;
}
.navbar .navbar-nav .nav-link:hover{
    color: #808080;
}
</style>
