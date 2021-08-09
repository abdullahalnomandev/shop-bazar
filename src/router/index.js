import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../components/Home/Home/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/productDetails/:_id",
    name: "ProductsDetails",
    component: () =>
      import("../components/ProductsDetails/ProductsDetails.vue"),
      meta: { requireAuth: true },
  },
  {
    path: "/admin/addProducts",
    name: "AddProducts",
    component: () => import("../components/Admin/AddProducts/AddProducts.vue"),
    // meta: { requireAuth: true },
  },
  {
    path: "/admin/manageProduct",
    name: "ManageProducts",
    component: () => import("../components/Admin/ManageProducts/ManageProducts.vue"),
    // meta: { requireAuth: true },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../components/Login/Login.vue"),
  },
  {
    path: "*",
    name: "NotFound",
    component: () => import("../components/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requireAuth)) {
    if (!store.state.user.email) {
      next({
        name: "Login",
        query: { redirect: to.fullPath }

      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
