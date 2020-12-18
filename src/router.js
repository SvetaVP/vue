import Vue from "vue";
import Router from "vue-router";
import ProductListPage from "@/views/ProductListPage";
import ProductPage from "@/views/ProductPage";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: ProductListPage,
    },
    {
      path: "/product/:id",
      component: ProductPage,
    },
  ],
});
