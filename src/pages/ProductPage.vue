<template>
  <div class="product-page">
    <Header />
    {{ product }}
  </div>
</template>

<script>
import Header from "@/components/Header";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Header,
  },
  computed: mapGetters(["product"]),
  methods: mapActions(["fetchProduct"]),
  async mounted() {
    this.fetchProduct(this.$route.params.id);
  },
};
</script>
