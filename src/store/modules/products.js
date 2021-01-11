export default {
  actions: {
    async fetchProducts(ctx) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
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
