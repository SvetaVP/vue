export default {
  actions: {
    async fetchProducts(ctx, limit = 10) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=" + limit
      );
      const productItems = await response.json();
      ctx.commit("updatedProducts", productItems);
    },

    async fetchProduct(ctx, id) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/" + id
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
