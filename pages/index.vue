<template lang="pug">
  .page.index.wrapper
    NuxtError(v-if="$fetchState.error")
    template(v-else)
      vCategory(
        v-for="(category, index) in categories"
        :key="index"
        :data="category")
      modalCreateCategory(
        :parentCategories="parentCategories"
        :nestedArticles="nestedArticles"
        @addInParentCategory="addInParentCategory"
        @addNewCategory="addNewCategory")
      modalEditCategory
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
      categories: []
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
      getCategories: 'category/getCategories'
    }),
    ...mapMutations({
      SET_LOADING: 'SET_LOADING'
    }),
    addInParentCategory(data) {
      this.categories.forEach(el => {
        if (el.id === data.id) {
          el.subcategories.push(data.subcategory)
        }
      })
    },
    addNewCategory(data) {
      this.categories.push(data)
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
}
</style>
