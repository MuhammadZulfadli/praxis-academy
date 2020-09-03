<template>
  <div>
    <h1>Get API with JSONPlaceholder</h1>
    <!-- <span>{{ info }}</span> -->
    <table>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Body</th>
      </tr>
      <tr v-for="item in info" v-bind:key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.body }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "kasus",
  data() {
    return {
      info: null,
    };
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.data)
      .then((response) => (this.info = response))
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
table,
tr,
td,
th {
  border: 1px solid black;
}
</style>
