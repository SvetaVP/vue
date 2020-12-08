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
      productItems: [],
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
