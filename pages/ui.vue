<template lang="pug">
  .page.ui.wrapper
    div ui
    br
    commonButton(type="primary icon")
      | Создать категорию
      iconPlus
    br
    commonButton(type="neutral")
      | Отмена
    br
    commonInput(v-model="queryInput")
      | Вложенные статьи
    br
    commonInput(
      v-model="querySearch"
      type="search"
      @clear="querySearch = ''")
      | Найти статью
      template(#icon)
        component(:is="querySearch ? 'iconClose' : 'iconLoupe'")
    br
    searchSelect(:data="options")
    br
    categoryButton(data="Категория 1")
</template>

<script>
import commonButton from '@/components/common/button'
import commonInput from '@/components/common/input'
import searchSelect from '@/components/search-select'
import categoryButton from '@/components/category-button'
import iconPlus from '@/components/icons/plus'
import iconLoupe from '@/components/icons/loupe'
import iconClose from '@/components/icons/close'

export default {
  name: 'page-index',
  components: {
    commonButton,
    commonInput,
    searchSelect,
    categoryButton,
    iconPlus,
    iconLoupe,
    iconClose
  },
  data() {
    return {
      queryInput: '',
      querySearch: '',
      options: [
        {
          title: 'Название статьи 123',
          id: 1
        },
        {
          title: 'Название статьи 1234',
          id: 2
        },
        {
          title: 'Название статьи 12345',
          id: 3
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.ui {
  padding: 0 100px;
}
</style>
