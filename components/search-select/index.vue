<template lang="pug">
  .search-select-component
    commonInput.search-select__input(
      v-model="value"
      type="select"
      isSelect
      :class="{ 'search-select__input--rotate-icon': isVisible }")
      | Вложенные статьи
      template(#icon)
        iconSelectArrow
    transition(name="fade")
      ul.search-select__list(
        v-if="isVisible"
        v-click-outside="toggleVisibility")
        li.search-select__item(
          v-for="item in data"
          :key="item.id"
          @click="select(item.alias)") {{ item.title }}
</template>

<script>
import commonInput from '@/components/common/input'
import iconSelectArrow from '@/components/icons/select-arrow'

export default {
  name: 'search-select-component',
  components: {
    commonInput,
    iconSelectArrow
  },
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  emits: ['create'],
  data() {
    return {
      value: '',
      isVisible: false
    }
  },
  watch: {
    value() {
      if (this.value) {
        this.isVisible = true
      } else {
        this.isVisible = false
      }
    }
  },
  methods: {
    toggleVisibility() {
      this.isVisible = !this.isVisible
    },
    select(alias) {
      this.isVisible = false
      if (alias === 'create') {
        this.$emit('create')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.search-select-component {
  position: relative;
  .search-select__input--rotate-icon {
    /deep/ .icon {
      svg {
        transform: rotate(180deg);
      }
    }
  }

  .search-select__list {
    margin-top: 1px;
    position: absolute;
    z-index: 100;
    top: 46px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 9px;
    gap: 4px;
    width: 100%;
    background: $color-neutral-white;
    box-shadow: 0px 10px 40px $color-neutral;
    border-radius: 5px;
  }
  .search-select__item {
    width: 100%;
    padding: 6px 8px;
    cursor: pointer;
    &:hover {
      background: rgba(48, 52, 70, 0.03);
    }
  }
}
</style>
