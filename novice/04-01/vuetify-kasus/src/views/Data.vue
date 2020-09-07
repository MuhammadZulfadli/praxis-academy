<template>
  <v-container class="my-5">
    <h2 class="subheading grey--text">List data</h2>
    <span v-for="post in posts.slice(0, 10)" :key="post.id">
      <router-link :to="{ name: 'AllData', params: { id: post.id } }">
        {{ post.title.substring(0, 50) }}
      </router-link>
      <p>{{ post.body.substring(0, 50) }}</p>
    </span>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      posts: [],
    };
  },

  async mounted() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    this.posts = response.data;
  },
};
</script>

<style></style>
