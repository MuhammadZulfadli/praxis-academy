<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <Latihan></Latihan>
    <hr />
    <LatihanLifeCycle></LatihanLifeCycle>
    <hr />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Latihan from "./components/Latihanparent";
import LatihanLifeCycle from "./components/LatihanLifecycle";

export default {
  name: "App",
  components: {
    // HelloWorld,
    Latihan,
    LatihanLifeCycle,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
