<template>
  <v-main class="product-list-page">
    <div class="add-product">
      If you want to add a product
      <router-link to="/add-product">click heare</router-link>
    </div>

    <v-divider></v-divider>

    <ProductList :products="products" />
  </v-main>
</template>

<script>
import ProductList from "@/components/ProductList";
import { mapActions, mapGetters } from "vuex";
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
.add-product {
  text-align: center;
  padding: 30px 0;
}
</style>
