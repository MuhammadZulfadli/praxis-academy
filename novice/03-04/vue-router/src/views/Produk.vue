<template>
  <div>
    <h2>Produk ID : {{ produkID }}</h2>
  </div>
</template>
<script>
export default {
  data() {
    return {
      produkID: this.$route.params.id,
    };
  },
};
</script>
