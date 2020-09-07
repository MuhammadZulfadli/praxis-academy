<template>
  <div>
    <h2>List data</h2>
    <span v-for="user in users" :key="user.id">
      <span>
        <!-- <span>{{ user.name }}</span> -->
        <router-link :to="{ name: 'ListData', params: { id: user.id } }">
          {{
          user.name
          }}
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

  mounted() {
    this.getAll();
  },
  methods: {
    getAll() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => {
          this.users = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
