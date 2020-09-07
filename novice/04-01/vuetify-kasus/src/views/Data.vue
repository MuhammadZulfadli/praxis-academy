<template>
  <!-- <v-container class="my-5">
    <h2 class="subheading grey--text">List data</h2>
    <span v-for="post in posts.slice(0, 10)" :key="post.id">
      <router-link :to="{ name: 'AllData', params: { id: post.id } }">
        {{ post.title.substring(0, 50) }}
      </router-link>
      <p>{{ post.body.substring(0, 50) }}</p>
    </span>
  </v-container> -->
  <v-container class="grey lighten-5">
    <h2 class="subheading grey--text">List data</h2>
    <v-row>
      <v-col cols="12" md="8">
        <v-card class="pa-2" outlined tile>
          <span v-for="post in posts.slice(0, 10)" :key="post.id">
            <router-link :to="{ name: 'AllData', params: { id: post.id } }">
              {{ post.title.substring(0, 50) }}
            </router-link>
            <p>{{ post.body.substring(0, 50) }}</p>
          </span>
        </v-card>
      </v-col>
      <v-col cols="6" md="4">
        <h2 class="subheading grey--text">Other Posts</h2>
        <v-card class="pa-2" outline tile>
          <span v-for="post in posts.slice(0, 5)" :key="post.id">
            <router-link :to="{ name: 'AllData', params: { id: post.id } }">
              {{ post.title.substring(0, 25) }}
            </router-link>
            <p>{{ post.body.substring(0, 25) }}</p>
          </span>
        </v-card>
      </v-col>
    </v-row>
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
