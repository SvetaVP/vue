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
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return await response.json();
  },
};
