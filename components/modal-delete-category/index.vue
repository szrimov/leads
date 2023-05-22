<template lang="pug">
  commonModal#modal-delete-category.modal-delete-category-component(
    @close="closeModal")
    iconQuestion
    .modal-delete__title Удалить категорию?
    .modal-delete__subtitle Все дочерние категории удалятся
    template(#actions)
      commonButton(type="primary icon")
        | Удалить
      commonButton(
        type="neutral"
        @click="closeModal")
        | Отмена
</template>

<script>
import commonModal from '@/components/common/modal'
import commonButton from '@/components/common/button'
import iconQuestion from '@/components/icons/question'

export default {
  name: 'modal-delete-category-component',
  components: {
    commonModal,
    commonButton,
    iconQuestion
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
      this.$store.dispatch('closeModal', 'modal-delete-category')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-delete-category-component {
  .modal-delete__title {
    margin-top: 16px;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #303446;
  }
  .modal-delete__subtitle {
    margin-top: 8px;
    font-size: 14px;
    line-height: 22px;
    color: #6a6e7e;
  }
}
</style>
