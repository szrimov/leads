<template lang="pug">
  commonModal#modal-create-category.modal-create-category-component(
    @close="closeModal")
    template(#title) Новая категория
    commonInput(v-model="categoryTitle")
      | Название
    searchSelect(
      type="category"
      title="Родительская карточка (необязательно)"
      :data="parentCategories"
      @setParentCategory="setParentCategory")
    searchSelect(
      type="article"
      title="Вложенные статьи"
      :data="nestedArticles"
      @addToNestedArticles="addToNestedArticles")
    template(#actions)
      commonButton(
        type="primary icon"
        @click="create")
        | Создать
      commonButton(
        type="neutral"
        @click="closeModal")
        | Отмена
    .modal-create-category__list
      categoryButton(
        v-for="item in articles"
        :key="item.id"
        :data="item.title"
        @delete="openModal('modal-delete-category')")
</template>

<script>
import commonModal from '@/components/common/modal'
import commonInput from '@/components/common/input'
import commonButton from '@/components/common/button'
import categoryButton from '@/components/category-button'
import searchSelect from '@/components/search-select'

export default {
  name: 'modal-create-category-component',
  components: {
    commonModal,
    commonInput,
    commonButton,
    categoryButton,
    searchSelect
  },
  props: {
    parentCategories: {
      type: Array,
      default: () => []
    },
    nestedArticles: {
      type: Array,
      default: () => []
    }
  },
  emits: ['addInParentCategory', 'addNewCategory'],
  data() {
    return {
      categoryTitle: '',
      parentCategoryId: 0,
      articles: []
    }
  },
  methods: {
    closeModal() {
      this.$store.dispatch('closeModal', 'modal-create-category')
    },
    addToNestedArticles(id) {
      const item = this.nestedArticles.find(el => el.id === id)
      this.articles.push(item)
    },
    setParentCategory(id) {
      this.parentCategoryId = id
    },
    create() {
      if (this.parentCategoryId) {
        this.$emit('addInParentCategory', {
          id: this.parentCategoryId,
          subcategory: {
            id: Math.floor(Math.random() * 1000),
            title: this.categoryTitle,
            articles: this.articles,
            subcategories: []
          }
        })
      } else {
        this.$emit('addNewCategory', {
          id: Math.floor(Math.random() * 1000),
          title: this.categoryTitle,
          articles: this.articles,
          subcategories: []
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-create-category-component {
  .modal-create-category__list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
}
</style>
