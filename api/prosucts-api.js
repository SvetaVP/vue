export default {
  async fetchProducts(ctx, limit = 10) {
    const response = await fetch(
      `${process.env.VUE_APP_BASE_URL}products?_limit=${limit}`
    );
    const productItems = await response.json();
  },

  async fetchProduct(ctx, id) {
    const response = await fetch(
      `${process.env.VUE_APP_BASE_URL}products/${id}`
    );
    const product = await response.json();
  },
};
