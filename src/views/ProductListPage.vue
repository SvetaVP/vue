<template>
  <div>
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
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((response) => response.json())
      .then((json) => {
        this.productItems = json;
      });

    // async function getProductItems() {
    //   const response = await fetch(
    //     "https://jsonplaceholder.typicode.com/todos"
    //   );
    //   let productItems = await response.json();
    //   return productItems;
    // }
  },
  components: {
    ProductList,
  },
};
</script>
