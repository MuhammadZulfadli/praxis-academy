<template>
  <div id="app">
    <h2>Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.</h2>
    <br />
    <div class="my-2">
      <v-btn depressed small color="primary" button @click="increment">+</v-btn>
    </div>
    <div class="my-2">
      <v-btn depressed small color="secondary" @click="decrement">-</v-btn>
    </div>
    <div class="my-2">
      <v-btn depressed small color="success" @click="incrementIfOdd"
        >Increment if odd</v-btn
      >
    </div>
    <div class="my-2">
      <v-btn depressed small color="error" @click="incrementAsync"
        >Increment async</v-btn
      >
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: mapGetters(["evenOrOdd"]),
  methods: mapActions([
    "increment",
    "decrement",
    "incrementIfOdd",
    "incrementAsync",
  ]),
};
</script>
