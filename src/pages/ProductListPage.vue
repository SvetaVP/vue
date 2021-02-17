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

<style scoped lang="scss">
.product-list-page {
  display: flex;
  --s: 100px; /* size  */
  --m: 4px; /* space */
  --r: calc(var(--s) * 3 * 1.1547 / 2 + 4 * var(--m) - 2px);
}
</style>
