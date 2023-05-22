<template lang="pug">
  .category-component
    .category__header
      .category__inner(@click="isVisible = !isVisible")
        .category__title {{ data.title }}
          sup {{ `(${articlesCount})` }}
        .category__icon(:class="{ 'category__icon--rotate': isVisible }")
          iconSelectArrow
      .category__submenu-icon(
        v-click-outside="closeSubmenu"
        @click="isSubmenuVisible = true")
        iconEllipsisVertical
      .category__submenu
        vSubmenu(
          :isVisible="isSubmenuVisible"
          :data="submenu")
    commonDropdown(:isVisible="isVisible")
      .category__cards
        articleCard(
          v-for="item in data.articles"
          :key="item.id"
          :data="item")
</template>

<script>
import commonButton from '@/components/common/button'
import commonDropdown from '@/components/common/dropdown'
import articleCard from '@/components/article-card'
import vSubmenu from './submenu'
import iconSelectArrow from '@/components/icons/select-arrow'
import iconEllipsisVertical from '@/components/icons/ellipsis-vertical'

export default {
  name: 'category-component',
  components: {
    commonButton,
    commonDropdown,
    articleCard,
    vSubmenu,
    iconSelectArrow,
    iconEllipsisVertical
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      isVisible: true,
      isSubmenuVisible: false,
      submenu: [{ title: 'Редактировать' }, { title: 'Удалить' }]
    }
  },
  computed: {
    articlesCount() {
      return (this.data.articles && this.data.articles.length) || 0
    }
  },
  methods: {
    closeSubmenu() {
      this.isSubmenuVisible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.category-component {
  .category__header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 16px;
    width: 100%;
  }
  .category__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    cursor: pointer;
  }
  .category__title {
    font-size: 24px;
    line-height: 32px;
    color: $color-neutral-primary-dark;
    sup {
      margin-left: 8px;
      vertical-align: super;
      font-weight: $font-weight-semi-bold;
      font-size: 16px;
      line-height: 24px;
      color: $color-neutral-placeholder;
    }
  }
  .category__icon {
    svg {
      width: 14px;
      height: 24px;
      transition: transform 0.3s ease;
      height: 100%;
    }
  }
  .category__icon--rotate {
    svg {
      transform: rotate(180deg);
    }
  }
  .category__submenu-icon {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .category__submenu {
    position: absolute;
    z-index: 100;
    top: 46px;
    right: 0;
  }
  .category__cards {
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
}
</style>
