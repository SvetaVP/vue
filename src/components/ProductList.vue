<template>
  <div class="holder">
    <ProductItem
      v-for="item in productItems"
      :key="item.id"
      v-bind:item="item"
    />
  </div>
</template>

<script>
import ProductItem from "@/components/ProductItem";
export default {
  props: ["productItems"],
  components: {
    ProductItem,
  },
};
</script>
