import ProductsApi from "../../api/prosucts-api";

export default {
  actions: {
    async fetchProducts(ctx) {
      const productItems = await ProductsApi.fetchProducts();
      ctx.commit("updatedProducts", productItems);
    },

    async fetchProduct(ctx) {
      const product = await ProductsApi.fetchProduct();
      ctx.commit("updatedProduct", product);
    },
  },

  mutations: {
    updatedProducts(state, productItems) {
      state.productItems = productItems;
    },

    updatedProduct(state, product) {
      state.product = product;
    },
  },

  state: {
    productItems: [],
    product: [],
  },

  getters: {
    products(state) {
      return state.productItems;
    },

    product(state) {
      return state.product;
    },
  },
};
