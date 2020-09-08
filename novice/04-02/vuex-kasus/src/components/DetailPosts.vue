<template>
  <div>
    <h2>Detail Posts</h2>
    <h4>{{post[0].title}}</h4>
    <p>{{post[0].body}}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "Detail",

  computed: {
    ...mapGetters(["allPosts"]),
    post: function () {
      return this.allPosts.filter((i) => i.id == this.$route.params.id);
    },
  },
};
</script>

<style>
</style>