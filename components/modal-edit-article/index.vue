<template lang="pug">
  commonModal#modal-edit-article.modal-edit-article-component(@close="closeModal")
    template(#title) {{ title }}
    searchSelect(
      :data="options"
      @create="createCategory")
    .modal-edit-article__create(v-if="isCreateCategory")
      commonInput(v-model="queryInput")
        | Название новой категории
      commonButton(
        type="primary"
        :disabled="!queryInput")
        | Создать
    template(#actions)
      commonButton(type="primary icon")
        | Сохранить
      commonButton(type="neutral")
        | Отмена
    .modal-edit-article__list
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
  name: 'modal-edit-article-component',
  components: {
    commonModal,
    commonInput,
    commonButton,
    searchSelect,
    categoryButton
  },
  data() {
    return {
      isCreateCategory: false,
      queryInput: '',
      options: [
        {
          title: 'Создать новую категорию',
          alias: 'create',
          id: 1
        },
        {
          title: 'Название статьи 123',
          alias: '',
          id: 2
        },
        {
          title: 'Название статьи 1234',
          alias: '',
          id: 3
        },
        {
          title: 'Название статьи 12345',
          alias: '',
          id: 4
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
  computed: {
    title() {
      return this.isCreateCategory
        ? 'Изменение статьи'
        : 'Изменение расположения статьи'
    }
  },
  methods: {
    createCategory() {
      this.isCreateCategory = true
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-edit-article-component {
  .modal-edit-article__create {
    display: flex;
    gap: 16px;
    .input-component {
      width: 100%;
    }
  }
  .modal-edit-article__list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>
