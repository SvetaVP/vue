export default {
  actions: {
    async fetchProducts(ctx, limit = 10) {
      const response = await fetch(
        process.env.VUE_APP_DB_URL + "products?_limit=" + limit
      );
      const productItems = await response.json();
      ctx.commit("updatedProducts", productItems);
    },

    async fetchProduct(ctx, id) {
      const response = await fetch(
        process.env.VUE_APP_DB_URL + "products/" + id
      );
      const product = await response.json();
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
