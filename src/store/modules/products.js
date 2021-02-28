import productsApi from "../../api/prosucts-api";

export default {
  actions: {
    async fetchProducts(ctx) {
      const productItems = await productsApi.fetchProducts();
      ctx.commit("updatedProducts", productItems);
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
    updatedProducts(state, productItems) {
      state.productItems = productItems;
    },

    updatedProduct(state, product) {
      state.product = product;
    },

    addNewProduct(state, newProduct) {
      state.productItems.push(newProduct);
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
