<template>
  <div class="product-list-page">
    <ProductList :productItems="productItems" />
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
  async mounted() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos?_limit=10"
    );
    this.productItems = await response.json();
  },
  components: {
    ProductList,
  },
};
</script>
