<template>
  <div class="holder">
    <ProductItemPreview v-for="item in products" :key="item.id" :item="item" />
  </div>
</template>

<script>
import ProductItemPreview from "@/components/ProductItemPreview";
export default {
  props: ["products"],
  components: {
    ProductItemPreview,
  },
};
</script>

<style scoped lang="scss">
.holder {
  font-size: 0; /*disable white space between inline block element */

  &:before {
    content: "";
    width: calc(var(--s) / 2 + var(--m));
    float: left;
    height: 100%;
    shape-outside: repeating-linear-gradient(
      transparent 0 calc(var(--r) - 3px),
      #fff 0 var(--r)
    );
  }
}
</style>
