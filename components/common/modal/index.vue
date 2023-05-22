<template lang="pug">
  transition(name="modal")
    .modal-component(
      v-if="show"
      @click.self="close")
      dialog(:open="show")
        .close.flex.center(@click="close")
          iconClose
        .title(v-if="$slots.title")
          slot(name="title")
        .content(ref="content")
          .content-wrap(ref="contentWrap")
            slot
        .actions.buttons(v-if="$slots.actions")
          slot(name="actions")
</template>

<script>
import { mapState } from 'vuex'
import iconClose from './close'

export default {
  name: 'modal-component',
  components: {
    iconClose
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  computed: {
    ...mapState({
      modals: state => state.modals
    }),
    show() {
      return this.modals?.includes(this.id)
    },
    isNoCustomScroll() {
      return this.id === 'menu'
    }
  },
  watch: {
    show() {
      this.$emit(this.show ? 'open' : 'close')
      this.$nextTick(() => {
        this.handleOnResize()
      })
    }
  },
  methods: {
    close() {
      this.$store.dispatch('closeModal', this.id)
      this.enableBodyScroll()
    },
    handleOnResize() {
      if (
        this.$refs.content &&
        this.$refs.contentWrap &&
        !this.isNoCustomScroll
      ) {
        if (this.$refs.contentWrap.offsetHeight + 80 >= window.innerHeight) {
          this.$refs.content.classList.add('scrollable')
        } else {
          this.$refs.content.classList.remove('scrollable')
        }
      }
    },
    handleOnKeyUp(e) {
      if (e.keyCode === 27) {
        this.close()
      }
    }
  },
  mounted() {
    window.addEventListener('resize', this.handleOnResize)
    window.addEventListener('keyup', this.handleOnKeyUp)
  },
  unmounted() {
    window.removeEventListener('resize', this.handleOnResize)
    window.removeEventListener('keyup', this.handleOnKeyUp)
  }
}
</script>

<style lang="scss">
@import './_index.scss';
.modal-component {
  dialog {
    overflow: auto;
  }
  &.modal-create-category-component,
  &.modal-edit-category-component,
  &.modal-edit-article-component {
    dialog {
      max-width: 826px;
      width: 100%;
      min-height: 100%;
      padding: 32px;
      display: flex;
      flex-direction: column;
    }
    .title {
      font-weight: $font-weight-semi-bold;
      font-size: 20px;
      line-height: 28px;
      color: $color-neutral-primary-dark;
    }
    .content {
      padding: 16px 0;
      display: block;
    }
    .content-wrap {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .actions {
      padding-top: 16px;
      width: 100%;
      display: flex;
      gap: 24px;
      border-top: 1px solid $color-neutral-border;
      .button-component {
        width: 100%;
      }
    }
  }
  &.modal-delete-category-component {
    dialog {
      max-width: 432px;
      width: 100%;
      padding: 36px 64px;
      text-align: center;
    }
    .content {
      padding: 0;
      display: block;
    }
    .actions {
      margin-top: 32px;
      width: 100%;
      display: flex;
      gap: 8px;
      .button-component {
        width: 100%;
      }
    }
  }
}
</style>
