import productsApi from "../../api/prosucts-api";

export default {
  actions: {
    async fetchProducts(ctx) {
      const products = await productsApi.fetchProducts();
      ctx.commit("updatedProducts", products);
    },

    async fetchProduct(ctx, id) {
      const product = await productsApi.fetchProduct(id);
      ctx.commit("updatedProduct", product);
    },

    async addNewProduct(ctx, data) {
      const newProduct = await productsApi.addNewProduct(data);
      ctx.commit("addNewProduct", newProduct);
    },
  },

  mutations: {
    updatedProducts(state, products) {
      state.products = products;
    },

    updatedProduct(state, product) {
      state.product = product;
    },

    addNewProduct(state, newProduct) {
      state.products.push(newProduct);
    },
  },

  state: {
    products: [],
    product: [],
  },

  getters: {
    products(state) {
      return state.products;
    },

    product(state) {
      return state.product;
    },
  },
};
