<template>
  <div class="product-page">
    <Header />
    {{ product }}
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header,
  },
  data() {
    return {
      product: {},
    };
  },
  async mounted() {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/" + this.$route.params.id
    );
    this.product = await response.json();
  },
};
</script>
