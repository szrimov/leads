<template lang="pug">
  commonModal#modal-edit-category.modal-edit-category-component(
    @close="closeModal")
    template(#title) Редактирование категории
    commonInput(v-model="queryInput")
      | Вложенные статьи
    searchSelect(:data="options")
    searchSelect(:data="options")
    template(#actions)
      commonButton(type="primary icon")
        | Сохранить
      commonButton(type="neutral")
        | Отмена
    .modal-edit-category__list
      categoryButton(
        v-for="item in categories"
        :key="item.id"
        :data="item.title"
        @delete="openModal('modal-delete-category')")
</template>

<script>
import commonModal from '@/components/common/modal'
import commonInput from '@/components/common/input'
import commonButton from '@/components/common/button'
import searchSelect from '@/components/search-select'
import categoryButton from '@/components/category-button'

export default {
  name: 'modal-edit-category-component',
  components: {
    commonModal,
    commonInput,
    commonButton,
    searchSelect,
    categoryButton
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
      ],
      categories: [
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
        },
        {
          title: 'Название статьи 12345',
          id: 4
        },
        {
          title: 'Название статьи 12345',
          id: 4
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-edit-category-component {
  .modal-edit-category__list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>
