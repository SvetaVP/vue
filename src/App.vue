<template>
  <div id="app">
    <ProductList v-bind:productItems="productItems" />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList";
export default {
  name: "App",
  data() {
    return {
      productItems: [
        { id: 1, title: "Product_1" },
        { id: 2, title: "Product_2" },
        { id: 3, title: "Product_3" },
      ],
    };
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        this.productItems = json;
      });
  },
  components: {
    ProductList,
  },
};
</script>

<style></style>
