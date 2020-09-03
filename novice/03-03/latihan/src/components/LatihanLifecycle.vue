<template>
  <div>
    <div class="jumbotron text-center">
      <h1>Lifecycle</h1>
      <p>Lifecycle Hooks Pada Vue.js</p>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div id="belajar-hook">{{ pesan }}</div>
          <br />
          <button @click="renderVirtualDom">re-Render Virtual DOM</button>
          <br />
          <div v-if="rendered"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      pesan: "Halo Vue",
      rendered: 0,
    };
  },
  methods: {
    renderVirtualDom() {
      this.rendered = 1;
    },
  },
  created() {
    console.log("log dari created():");
    console.log("pesan: " + this.pesan);
    console.log(document.getElementById("belajar-hook"));
    console.log("");
  },
  mounted() {
    console.log("log dari mounted():");
    console.log("pesan: " + this.pesan);
    console.log(document.getElementById("belajar-hook"));
    console.log("");
    this.pesan = "Semangat Pagi Dunia";
  },
  updated() {
    console.log("log dari update():");
    console.log("pesan: " + this.pesan);
    console.log(document.getElementById("belajar-hook"));
    console.log("");
  },
};
</script>
