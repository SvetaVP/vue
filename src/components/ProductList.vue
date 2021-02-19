<template>
  <div class="wrapper">
    <div class="holder">
      <ProductItemPreview
        v-for="item in products"
        :key="item.id"
        :item="item"
      />
    </div>
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
.wrapper {
  display: flex;
  --s: 100px; /* size  */
  --m: 4px; /* space */
  --r: calc(var(--s) * 3 * 1.1547 / 2 + 4 * var(--m) - 2px);
  margin-top: 30px;
}

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
