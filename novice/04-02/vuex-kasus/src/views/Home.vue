<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Posts />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Posts from "@/components/Posts.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
    Posts,
  },
};
</script>
