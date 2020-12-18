<template>
  <div class="product-item">
    <router-link :to="`/product/${item.id}`">{{ item.id }}</router-link>
  </div>
</template>

<script>
export default {
  props: ["item"],
};
</script>

<style scoped lang="scss">
.product-item {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border: 1px solid green;

  a {
    text-decoration: none;
  }
}
</style>
