<template lang="pug">
  .page.index.wrapper
    NuxtError(v-if="$fetchState.error")
    template(v-else)
      .category__wrapper(
        v-for="category in categories"
        :key="category.id")
        vCategory(
          :data="category"
          @deleteCategory="deleteCategory"
          @editCategory="editCategory")
        .subcategory__wrapper(v-if="category.subcategories.length")
          vCategory(
            v-for="subcategory in category.subcategories"
            :key="subcategory.id"
            type="subcategory"
            :data="subcategory"
            @deleteCategory="deleteCategory"
            @editCategory="editCategory")
      modalCreateCategory(
        :parentCategories="parentCategories"
        :nestedArticles="nestedArticles"
        @addInParentCategory="addInParentCategory"
        @addNewCategory="addNewCategory")
      modalEditCategory(:category="editingCategory")
      modalEditArticle
      modalDeleteCategory
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
import { SET_ERROR_CODE_FOR_PAGE } from '@handlers'
import NuxtError from '@/layouts/error'
import vCategory from '@/components/category'
import modalCreateCategory from '@/components/modal-create-category'
import modalEditCategory from '@/components/modal-edit-category'
import modalDeleteCategory from '@/components/modal-delete-category'
import modalEditArticle from '@/components/modal-edit-article'

export default {
  name: 'page-index',
  components: {
    NuxtError,
    vCategory,
    modalCreateCategory,
    modalEditCategory,
    modalDeleteCategory,
    modalEditArticle
  },
  data() {
    return {
      categories: [],
      editingCategory: {}
    }
  },
  computed: {
    ...mapState({
      modals: state => state.modals
    }),
    parentCategories() {
      return (
        (this.categories.length &&
          this.categories.map(el => ({ title: el.title, id: el.id }))) ||
        []
      )
    },
    nestedArticles() {
      return (
        (this.categories.length &&
          this.categories
            .map(el => el.articles.length && el.articles)
            .flat()) ||
        []
      )
    }
  },
  watch: {
    '$fetchState.pending': function () {
      if (this.$fetchState.pending) {
        this.SET_LOADING(true)
      } else {
        this.SET_LOADING(false)
      }
    }
  },
  methods: {
    ...mapActions({
      getCategories: 'category/getCategories',
      addCategory: 'category/addCategory',
      updateCategory: 'category/updateCategory'
    }),
    ...mapMutations({
      SET_LOADING: 'SET_LOADING'
    }),
    async addInParentCategory(data) {
      const category = await this.updateCategory({ id: data.id, data })
      if (Object.entries(category).length) {
        this.categories.forEach(el => {
          if (el.id === data.id) {
            el.subcategories.push(data.subcategory)
          }
        })
      }
    },
    async addNewCategory(data) {
      const category = await this.addCategory(data)
      if (Object.entries(category).length) {
        this.categories.push(category)
      }
    },
    async deleteCategory(data) {
      this.getRecursivelyCategory(this.categories, data.id)
    },
    editCategory(data) {
      this.editingCategory = data
    },
    getRecursivelyCategory(categories, id) {
      const findedCategory = categories.find(el => el.id === id)
      if (findedCategory && Object.entries(findedCategory).length) {
        this.$delete(
          categories,
          categories.findIndex(el => el.id === findedCategory.id)
        )
        return
      }
      categories.forEach(
        el =>
          new Promise(resolve => {
            resolve(this.getRecursivelyCategory(el.subcategories, id))
          })
      )
    }
  },
  async fetch() {
    try {
      this.categories = await this.getCategories()
    } catch (error) {
      SET_ERROR_CODE_FOR_PAGE(this, error)
    }
  }
}
</script>

<style lang="scss">
.index {
  padding-top: 48px;
  display: flex;
  flex-direction: column;
  gap: 48px;
  .category__wrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .subcategory__wrapper {
    padding-left: 16px;
  }
}
</style>
