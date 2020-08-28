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
    path: "/kontak",
    name: "Blog",
    component: () => import("../views/Blog.vue"),
  },
  {
    path: "/review",
    name: "Blog",
    component: () => import("../views/Blog.vue"),
  },
  {
    path: "/promo",
    name: "Blog",
    component: () => import("../views/Blog.vue"),
  },
  {
    path: "/hosting",
    name: "Blog",
    component: () => import("../views/Blog.vue"),
  },
  {
    path: "/domain",
    name: "Blog",
    component: () => import("../views/Blog.vue"),
  },
  {
    path: "/server",
    name: "Blog",
    component: () => import("../views/Blog.vue"),
  },
  {
    path: "/afiliasi",
    name: "Blog",
    component: () => import("../views/Blog.vue"),
  },
  {
    path: "/website",
    name: "Blog",
    component: () => import("../views/Blog.vue"),
  },
  {
    path: "/pembayaran",
    name: "Blog",
    component: () => import("../views/Blog.vue"),
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("../views/Blog.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
