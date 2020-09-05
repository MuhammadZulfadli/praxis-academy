import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/user",
    name: "User",
    component: () => import(/* webpackChunkName: "user" */ "../views/User.vue"),
  },
  {
    path: "/produk/:id",
    name: "Produk",
    component: () =>
      import(/* webpackChunkName: "produk" */ "../views/Produk.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/Admin.vue"),
    children: [
      {
        path: "post",
        component: () =>
          import(/* webpackChunkName: "post" */ "../views/admin/Post.vue"),
      },
      {
        path: "dashboard",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/admin/Dashboard.vue"
          ),
      },
    ],
  },
  {
    path: "/data",
    name: "Data",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Data.vue"),
  },
  {
    path: "/data",
    name: "ListData",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/ListData.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
