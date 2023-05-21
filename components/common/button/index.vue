<template lang="pug">
  // тег "a"
  a.button-component(
    v-if="href"
    role="button"
    :class="[classList, { disabled }]"
    :href="href"
    :target="target"
    @click="click"
    @focus="$emit('focus')"
    @blur="$emit('blur')")
    slot

  // тег "nuxt-link"
  nuxt-link.button-component(
    v-else-if="to"
    role="button"
    :to="to"
    :class="[classList, { disabled }]"
    @click="click"
    @focus="$emit('focus')"
    @blur="$emit('blur')")
    slot

  // тег "button"
  button.button-component(
    v-else
    :type="native"
    role="button"
    :class="[classList, { disabled }]"
    :form="form"
    @click="click"
    @focus="$emit('focus')"
    @blur="$emit('blur')"
    :disabled="disabled")
    slot
</template>

<script>
export default {
  name: 'button-component',
  props: {
    type: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'large'
    },
    native: {
      type: String,
      default: 'button' // button, submit, confirm
    },
    // только для кнопок с тегом "button"
    form: String,
    // только для ссылок с тегом "a"
    href: {
      type: String,
      default: undefined
    },
    // только для ссылок с тегом "nuxt-link"
    to: {
      type: String,
      default: undefined
    },
    // только для ссылок с тегом "a"
    target: {
      type: String,
      default: '_blank' // _blank, _self
    },
    // cостояние неактивности
    disabled: Boolean
  },
  emits: ['click'],
  computed: {
    classList() {
      return [
        ...this.type.split(' ').map(el => `button-type-${el}`),
        `button-size-${this.size}`
      ].join(' ')
    }
  },
  methods: {
    click(e) {
      if (this.disabled) {
        return e
      }
      this.$emit('click', e)
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
@import './_index.scss';
.button-component {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  &.button-size-small {
    padding: 4px 5px;
  }
}
</style>
