<template>
  <div class="product-list-page">
    <ProductList :products="products" />
  </div>
</template>

<script>
import ProductList from "@/components/ProductList";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "App",
  computed: mapGetters(["products"]),
  methods: mapActions(["fetchProducts"]),
  async mounted() {
    this.fetchProducts();
  },
  components: {
    ProductList,
  },
};
</script>
