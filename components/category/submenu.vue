<template lang="pug">
  transition(name="fade")
    ul.submenu-component(v-show="isVisible")
      li.submenu__item(
        v-for="(item, index) in data"
        :key="index"
        @click="$emit(item.alias)") {{ item.title }}
</template>

<script>
export default {
  name: 'dropdown-component',
  components: {},
  props: {
    isVisible: Boolean,
    data: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.submenu-component {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 8px 9px;
  gap: 4px;
  background: $color-neutral-white;
  box-shadow: 0px 10px 40px $color-neutral;
  border-radius: 5px;
  .submenu__item {
    width: 100%;
    padding: 6px 8px;
    cursor: pointer;
    &:hover {
      background: rgba(48, 52, 70, 0.03);
    }
  }
}
</style>
