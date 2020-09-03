<template>
  <div>
    <div id="app">
      <button id="show-modal" @click="showModal = true">Show Modal</button>
      <!-- use the modal component, pass in the prop -->
      <modal v-if="showModal" @close="showModal = false">
        <!--
      you can use custom content here to overwrite
      default content
        -->
        <h3 slot="header">custom header</h3>
      </modal>
    </div>
    <br />
    <div id="demo">
      <form id="search">
        Search
        <input name="query" v-model="searchQuery" />
      </form>
      <grid :heroes="gridData" :columns="gridColumns" :filter-key="searchQuery"></grid>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import Grid from "./components/Grid";
import Modal from "./components/Modal";

export default {
  name: "App",
  components: {
    Grid,
    Modal,
  },
  data: function () {
    return {
      searchQuery: "",
      gridColumns: ["name", "power"],
      gridData: [
        { name: "Chuck Norris", power: Infinity },
        { name: "Bruce Lee", power: 9000 },
        { name: "Jackie Chan", power: 7000 },
        { name: "Jet Li", power: 8000 },
        { name: "Ip Man", power: 100000 },
      ],
      showModal: false,
    };
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
