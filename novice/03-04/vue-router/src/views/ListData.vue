<template>
  <div>
    <h2>Detail User</h2>
    <h3>{{ user.name }}</h3>
    <ul>
      <li>{{ user.username }}</li>
      <li>{{ user.email }}</li>
      <li>{{ user.address }}</li>
      <li>{{ user.phone }}</li>
      <li>{{ user.website }}</li>
    </ul>
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
  created() {
    this.getUserData();
  },
  methods: {
    getUserData() {
      axios
        .get(
          `https://jsonplaceholder.typicode.com/users/${this.$route.params.id}`
        )
        .then((res) => {
          this.user = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
