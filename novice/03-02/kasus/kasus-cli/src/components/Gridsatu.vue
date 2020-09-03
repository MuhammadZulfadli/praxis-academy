<template>
  <div>
    <h1>Ini Grid</h1>
    <form id="search">
      Search
      <input name="query" v-model="searchQuery" />
    </form>
    <Griddua :heroes="gridData" :columns="gridColumns" :filter-key="searchQuery"></Griddua>
  </div>
</template>

<script>
import Griddua from "./Griddua";
export default {
  data() {
    return {
      searchQuery: "",
      gridColumns: ["name", "power"],
      gridData: [
        { name: "Chuck Norris", power: Infinity },
        { name: "Bruce Lee", power: 9000 },
        { name: "Jackie Chan", power: 7000 },
        { name: "Jet Li", power: 8000 },
      ],
    };
  },
  components: {
    Griddua,
  },
};
</script>