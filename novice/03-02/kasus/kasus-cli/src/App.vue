<template>
  <div>
    <Modalsatu></Modalsatu>
    <br />
    <Gridsatu></Gridsatu>
    <p v-for="(animal, index) in binatang" v-bind:key="animal">{{animal}} {{index}}</p>
    {{binatang}}
    <HelloWorld :heros="binatang"></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Modalsatu from "./components/Modalsatu";
import Gridsatu from "./components/Gridsatu";

export default {
  name: "App",
  data() {
    return {
      binatang: ["kucing", "musang"],
    };
  },
  components: {
    Modalsatu,
    Gridsatu,
    HelloWorld,
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
