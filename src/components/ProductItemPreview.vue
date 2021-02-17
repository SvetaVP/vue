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
  width: var(--s);
  margin: var(--m);
  height: calc(var(--s) * 1.1547); /*  = 1/cos(30)  */
  display: inline-flex;
  font-size: initial;
  clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
  background: #7740bf;
  margin-bottom: calc(var(--m) - var(--s) * 0.2885); /* = tan(30)/2 */
  position: relative;

  &:nth-child(odd) {
    background: #2196f3;
  }

  a {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
}
</style>
