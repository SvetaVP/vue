<template>
  <div class="product-page">
    <Header />
    {{ $route.params.id }}
  </div>
</template>

<script>
import Header from "@/components/Header";
export default {
  components: {
    Header,
  },
};
</script>
