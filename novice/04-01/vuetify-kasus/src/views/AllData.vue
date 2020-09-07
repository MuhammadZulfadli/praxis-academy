<template>
  <div>
    <v-container>
      <h2>Detail Posts</h2>
      <h3>{{ post.title }}</h3>
      <p>{{ post.body }}</p>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      post: [],
    };
  },
  async created() {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${this.$route.params.id}`
    );
    this.post = response.data;
  },
};
</script>
