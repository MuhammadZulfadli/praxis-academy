<template>
  <nav>
    <v-toolbar flat app>
      <v-app-bar-nav-icon class="grey--text" @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Vue</span>
        <span>Tify</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- <v-btn flat color="grey">
        <span>Sign Out</span>
        <v-icon right>mdi-login</v-icon>
      </v-btn>-->
    </v-toolbar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item v-for="link in links" :key="link.text" :to="link.route">
            <v-list-item-icon>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-home", text: "Home", route: "/" },
        { icon: "mdi-calendar", text: "Todo", route: "/todo" },
        { icon: "mdi-calendar", text: "Toy", route: "/toy" },
        { icon: "mdi-account", text: "About", route: "/about" },
      ],
    };
  },
};
</script>

<style>
</style>