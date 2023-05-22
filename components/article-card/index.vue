<template lang="pug">
  .article-card-component
    .article-card__wrapper
      .article-card__likes
        iconLike
        span {{ data.likesQuantity }}
      .article-card__edit(@click="$emit('edit')")
        iconPen
    .article-card__banner
      img(src="@/static/article-card/banner-card.png")
    .article-card__title {{ data.title }}
    .article-card__subtitle {{ data.subtitle }}
</template>

<script>
import commonButton from '@/components/common/button'
import iconLike from '@/components/icons/like'
import iconPen from '@/components/icons/pen'

export default {
  name: 'article-card-component',
  components: {
    commonButton,
    iconLike,
    iconPen
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.article-card-component {
  padding: 16px;
  max-width: 290px;
  width: 100%;
  border: 1px solid $color-neutral-border;
  border-radius: 10px;
  .article-card__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .article-card__likes {
    display: flex;
    align-items: center;
    font-size: 12px;
    line-height: 15px;
    color: $color-neutral-placeholder;
    user-select: none;
    svg {
      cursor: pointer;
      transition: color 0.3s ease;
      &:hover {
        color: $color-product-info-primary;
      }
      &:active {
        color: $color-product-info-primary;
      }
    }
  }
  .article-card__edit {
    svg {
      cursor: pointer;
      transition: color 0.3s ease;
      &:hover {
        color: $color-product-info-primary;
      }
      &:active {
        color: $color-product-info-primary;
      }
    }
  }
  .article-card__banner {
    margin-top: 12px;
  }
  .article-card__title {
    margin-top: 8px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: $color-neutral-primary-dark;
  }
  .article-card__subtitle {
    margin-top: 8px;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: $color-neutral-secondary-text;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    overflow: hidden;
    word-break: break-word;
    text-overflow: ellipsis;
  }
}
</style>
