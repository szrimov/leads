<template lang="pug">
  .input-component(
    :class="[...classList(type), { 'input-component-error': error, filled: value }]")
    input(
      ref="input"
      :type="inputType"
      :value="value"
      :placeholder="placeholder"
      v-mask="mask"
      v-on:keyup.enter="$event.target.blur()"
      :id="localId"
      :name="name"
      :readonly="readonly"
      :autofocus="autofocus"
      :maxLength="maxLength"
      :min="min"
      :max="max"
      @input="input($event.target.value)"
      @change="change($event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
      @keyup="$emit('keyup', $event)"
      @keydown="keyDown($event)"
      @paste="paste"
      :disabled="disabled")
    label(
      v-if="$slots.default"
      :for="localId")
      slot
    .icon(
      :class="{ 'icon--active': isSearch && value }"
      @click="isSearch && $emit('clear')")
      slot(name="icon")
    transition(name="fade")
      .error.light(v-if="error") {{ errorText }}
</template>

<script>
import { classList } from '@utils'
import AwesomeMask from 'awesome-mask'

export default {
  name: 'input-component',
  directives: {
    mask: AwesomeMask
  },
  props: {
    id: String,
    name: String,
    type: {
      type: String,
      default: () => ''
    },
    inputType: {
      type: String,
      default: 'text'
    },
    value: [String, Number],
    error: [String, Boolean],
    placeholder: String,
    autofocus: Boolean,
    readonly: Boolean,
    disabled: Boolean,
    maxLength: Number,
    min: Number,
    max: Number
  },
  emits: ['input', 'change', 'paste'],
  data() {
    return {
      classList,
      localId: this.id,
      mask: ''
    }
  },
  computed: {
    isSearch() {
      return this.type === 'search'
    },
    isSelect() {
      return this.type === 'select'
    },
    errorText() {
      return typeof this.error === 'string' ? this.error : ''
    }
  },
  methods: {
    keyDown(event) {
      if (['+', '-', 'e'].includes(event.key)) {
        // event.preventDefault()
      }
    },
    input(value) {
      if (this.type === 'phone') {
        // Удаляем все символы, кроме цифр
        const phone = value.match(
          /(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/
        )
        value = phone.input
        this.mask = '+9 (999)-999-99-99'
        if (value === '+') {
          value = ''
        }
      }
      value = value.replace(',', '.')
      if (String(value).length > this.maxLength) {
        value = value.slice(0, this.maxLength)
      }
      this.$forceUpdate()
      this.$emit('input', value)
    },
    change(value) {
      this.$emit('change', value)
    },
    focus() {
      this.$nextTick(() => {
        this.$refs.input.focus()
      })
    },
    paste(e) {
      e.preventDefault()
      let value
      if (!e.clipboardData && window.clipboardData) {
        value = window.clipboardData.getData('Text')
      } else if (e.clipboardData) {
        value = e.clipboardData.getData('Text')
      }
      this.$emit('input', value)
      this.$emit('paste', value)
    }
  },
  mounted() {
    this.localId = this.localId || Math.random().toFixed(7).slice(2)
    if (this.autofocus) {
      this.focus()
    }
  }
}
</script>

<style lang="scss" scoped>
@import './_index.scss';
// Your custom styles here
.input-component {
  position: relative;
  .icon {
    position: absolute;
    top: 0;
    right: 12px;
    display: flex;
    align-items: center;
    height: 100%;
    svg {
      width: 16px;
      height: 24px;
      transition: transform 0.3s ease;
    }
  }
  &.select {
    svg {
      width: 14px;
      height: 24px;
    }
  }
  &.search {
    .icon {
      right: 20px;
    }
    .icon--active {
      cursor: pointer;
      svg {
        width: 16px;
        height: 16px;
      }
    }
  }
}
</style>
