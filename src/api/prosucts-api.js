export default {
  async fetchProducts() {
    const response = await fetch(`${process.env.VUE_APP_BASE_URL}products`);
    return await response.json();
  },

  async fetchProduct(id) {
    const response = await fetch(
      `${process.env.VUE_APP_BASE_URL}products/${id}`
    );
    return await response.json();
  },
};
