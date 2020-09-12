<template>
  <div>
    <v-container>
      <h2>Detail Product</h2>
      <v-simple-table height="300px">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">Name</th>
              <th class="text-left">Description</th>
              <th class="text-left">Category</th>
              <th class="text-left">Release Date</th>
              <th class="text-left">In Home</th>
            </tr>
          </thead>
          <tbody>
            <td>{{toy.name}}</td>
            <td>{{toy.description}}</td>
            <td>{{toy.toy_category}}</td>
            <td>{{toy.release_date}}</td>
            <td>{{toy.was_included_in_home}}</td>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      toy: [],
    };
  },
  async created() {
    const response = await axios.get(
      `http://192.168.1.44:8000/toys/${this.$route.params.id}`
    );
    this.toy = response.data;
  },
};
</script>

<style>
</style>