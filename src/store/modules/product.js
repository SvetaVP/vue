export default {
  actions: {
    async fetchProduct(ctx, id) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/" + id
      );
      const product = await response.json();
      ctx.commit("updatedProduct", product);
    },
  },
  mutations: {
    updatedProduct(state, product) {
      state.product = product;
    },
  },
  state: {
    product: [],
  },
  getters: {
    product(state) {
      return state.product;
    },
  },
};
