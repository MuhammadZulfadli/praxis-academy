<template>
  <div>
    <button id="show-modal" @click="showModal = true">Show Modal</button>
    <!-- use the modal component, pass in the prop -->
    <Modaldua v-if="showModal" @close="showModal = false">
      <!--
      you can use custom content here to overwrite
      default content
      -->
      <h3 slot="header">custom header</h3>
    </Modaldua>
  </div>
</template>

<script>
import Modaldua from "./Modaldua";
export default {
  data: function () {
    return {
      showModal: false,
    };
  },
  components: {
    Modaldua,
  },
};
</script>