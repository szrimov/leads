<template lang="pug">
  .loader-component
</template>

<script>
export default {
  name: 'loader-component'
}
</script>

<style lang="scss">
.loader-component {
  top: 0;
  left: 0;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-top: 5px solid rgba($color-product-primary, 0.1);
  border-right: 5px solid rgba($color-product-primary, 0.1);
  border-bottom: 5px solid rgba($color-product-primary, 0.1);
  border-left: 5px solid $color-product-primary;
  animation: loader 1.1s infinite linear;
  @-webkit-keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
