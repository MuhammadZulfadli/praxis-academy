<template>
  <div>
    <h2>List data</h2>
    <span v-for="user in users" :key="user.id">
      <span>
        <!-- <span>{{ user.name }}</span> -->
        <router-link :to="{ name: 'ListData', params: { id: user.id } }">
          {{ user.name }}
          <br />
        </router-link>
      </span>
    </span>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      users: [],
    };
  },

  async mounted() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    this.users = response.data;
  },
};
</script>
