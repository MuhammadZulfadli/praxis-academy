<template>
  <div>
    <h2>All Posts</h2>
    <div v-for="post in allPosts" :key="post.id">
      <!-- <h4>{{post.title}}</h4> -->
      <router-link :to="`/detail/${post.id}`">
        <p>{{post.title}}</p>
      </router-link>
      <p>{{post.body}}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Posts",
  methods: {
    ...mapActions(["getAllposts"]),
  },

  computed: mapGetters(["allPosts"]),

  created() {
    this.getAllposts();
  },
};
</script>

<style>
</style>