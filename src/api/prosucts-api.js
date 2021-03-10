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

  async addNewProduct(data) {
    const response = await fetch(`${process.env.VUE_APP_BASE_URL}products`, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      redirect: "follow",
      referrerPolicy: "strict-origin-when-cross-origin",
      body: JSON.stringify(data),
    });
    return await response.json();
  },
};
