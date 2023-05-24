<template lang="pug">
  commonModal#modal-edit-category.modal-edit-category-component(
    @close="closeModal")
    template(#title) Редактирование категории
    commonInput(v-model="queryInput")
      | Вложенные статьи
    searchSelect(
      type="category"
      title="Родительская карточка (необязательно)"
      :data="options")
    searchSelect(
      type="article"
      title="Вложенные статьи"
      :data="options")
    template(#actions)
      commonButton(type="primary icon")
        | Сохранить
      commonButton(
        type="neutral"
        @click="closeModal")
        | Отмена
    .modal-edit-category__list
      categoryButton(
        v-for="item in category.articles"
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
  props: {
    category: {
      type: Object,
      default: () => {}
    }
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
  },
  watch: {
    category() {
      this.queryInput = (this.category && this.category.title) || ''
    }
  },
  methods: {
    closeModal() {
      this.$store.dispatch('closeModal', 'modal-edit-category')
    }
  },
  mounted() {}
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
