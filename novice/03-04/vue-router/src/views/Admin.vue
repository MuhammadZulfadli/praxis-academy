<template>
  <div>
    <div id="nav">
      <h1>Ini halaman Admin</h1>
      <router-link to="/admin/dashboard">Dashboard</router-link> |
      <router-link to="/admin/post">Post</router-link> |
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
