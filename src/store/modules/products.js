export default {
  actions: {
    async fetchProducts(ctx, limit = 10) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=" + limit
      );
      const productItems = await response.json();
      ctx.commit("updatedProducts", productItems);
    },
  },
  mutations: {
    updatedProducts(state, productItems) {
      state.productItems = productItems;
    },
  },
  state: {
    productItems: [],
  },
  getters: {
    products(state) {
      return state.productItems;
    },
  },
};
