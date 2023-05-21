<template lang="pug">
  .page.error.wrapper.flex.column.a-center.j-center
    h1 Что-то пошло не&nbsp;так
    div Страница перенесена, была удалена или не&nbsp;существовала вовсе
</template>

<script>
export default {
  name: 'page-error'
}
</script>

<style lang="scss">
.page.error {
  min-height: 100vh;
}
</style>
