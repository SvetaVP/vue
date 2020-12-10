<template>
  <div class="holder">
    <ProductItemPreview
      v-for="item in productItems"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script>
import ProductItemPreview from "@/components/ProductItemPreview";
export default {
  props: ["productItems"],
  components: {
    ProductItemPreview,
  },
};
</script>

<style scoped>
.holder {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
}
</style>
