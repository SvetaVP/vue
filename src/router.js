import Vue from "vue";
import Router from "vue-router";
import ProductListPage from "@/pages/ProductListPage";
import ProductPage from "@/pages/ProductPage";

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
