<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "./views/Home";
import Login from "./views/Login";
export default {
  name: 'App',
  components: {
    Login,
    Home
  }
}
</script>

<style>
body{
  margin: 0 0 0 0 ;
  padding: 0 0 0 0;
}
</style>
