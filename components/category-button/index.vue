<template lang="pug">
  .category-button-component
    commonButton(
      type="primary icon"
      size="small"
      @click="$emit('delete')")
      iconTrash
    .category-button__title {{ data }}
</template>

<script>
import commonButton from '@/components/common/button'
import commonInput from '@/components/common/input'
import iconTrash from '@/components/icons/trash'

export default {
  name: 'category-button-component',
  components: {
    commonButton,
    commonInput,
    iconTrash
  },
  props: {
    data: {
      type: String,
      default: () => ''
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.category-button-component {
  display: flex;
  align-items: center;
  gap: 12px;
  .category-button__title {
    white-space: nowrap;
    font-size: 16px;
    line-height: 24px;
    color: $color-neutral-primary-text;
  }
}
</style>
