<template>
  <div id="app">
    <div id="nav">
      <TopNavbar />
    </div>
    <router-view />
  </div>
</template>

<script>
import TopNavbar from "./components/TopNavbar";
export default {
  components: {
    TopNavbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #636463;
}

#nav a {
  color: #636463;
}

#nav a.router-link-exact-active {
  color: #0091ee;
}
</style>
