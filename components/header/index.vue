<template lang="pug">
  header.wrapper.header-component
    commonButton(type="primary icon")
      | Создать категорию
      iconPlus
    commonInput.header__search-input(
      v-model="query"
      type="search"
      @clear="query = ''")
      | Найти статью
      template(#icon)
        component(:is="query ? 'iconClose' : 'iconLoupe'")
</template>

<script>
import commonButton from '@/components/common/button'
import commonInput from '@/components/common/input'
import iconPlus from '@/components/icons/plus'
import iconLoupe from '@/components/icons/loupe'
import iconClose from '@/components/icons/close'

export default {
  name: 'header-component',
  components: {
    commonButton,
    commonInput,
    iconPlus,
    iconLoupe,
    iconClose
  },
  data() {
    return {
      query: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.header-component {
  padding-top: 32px;
  display: flex;
  gap: 16px;
  .header__search-input {
    width: 100%;
  }
}
</style>
