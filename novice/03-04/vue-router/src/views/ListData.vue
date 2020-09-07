<template>
  <div>
    <h2>Detail User</h2>
    <h3>{{ user.name }}</h3>

    <p>Username : {{ user.username }}</p>
    <p>Email : {{ user.email }}</p>
    <p>Address: {{ user.address }}</p>
    <p>Phone Number : {{ user.phone }}</p>
    <p>WEbiste: {{ user.website }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      user: [],
    };
  },
  async created() {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`
    );
    this.user = response.data;
  },
};
</script>
