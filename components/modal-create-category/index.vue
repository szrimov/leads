<template lang="pug">
  commonModal#modal-create-category.modal-create-category-component(
    @close="closeModal")
    template(#title) Новая категория
    commonInput(v-model="queryInput")
      | Вложенные статьи
    searchSelect(:data="options")
    searchSelect(:data="options")
    template(#actions)
      commonButton(type="primary icon")
        | Сохранить
      commonButton(
        type="neutral"
        @click="closeModal")
        | Отмена
</template>

<script>
import commonModal from '@/components/common/modal'
import commonInput from '@/components/common/input'
import searchSelect from '@/components/search-select'
import commonButton from '@/components/common/button'

export default {
  name: 'modal-create-category-component',
  components: {
    commonModal,
    commonInput,
    searchSelect,
    commonButton
  },
  data() {
    return {
      queryInput: '',
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
  },
  methods: {
    closeModal() {
      this.$store.dispatch('closeModal', 'modal-create-category')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-create-category-component {
}
</style>
