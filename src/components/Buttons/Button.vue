<template>
  <!-- router link button -->
  <router-link
    v-if="isRouterLink"
    :to="link"
    :class="classes"
    @keydown="keydown"
    @keyup="keyup"
    :disabled="loading || disabled"
    :tabindex="index">

    <template v-if="!loading">
      <slot name="before"></slot>
      <span class="text">
        <slot></slot>
      </span>
      <slot name="after" class="after"></slot>
    </template>
  </router-link>

  <!-- link button -->
  <a
    v-else-if="isLink"
    :href="link"
    :target="target"
    :class="classes"
    @click="click"
    @keydown="keydown"
    @keyup="keyup"
    :disabled="loading || disabled"
    :tabindex="index"
  >
    <template v-if="!loading">
      <slot name="before"></slot>
      <span class="text">
        <slot></slot>
      </span>
      <slot name="after" class="after"></slot>
    </template>
  </a>

  <!-- simple button -->
  <button
    v-else
    :class="classes"
    @click="click"
    @keydown="keydown"
    @keyup="keyup"
    :disabled="loading || disabled"
    :tabindex="index"
  >
    <template v-if="!loading">
      <slot name="before"></slot>
      <span class="text">
        <slot></slot>
      </span>
      <slot name="after" class="after"></slot>
    </template>
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    loadingText: {
      type: String,
      default: 'loading...'
    },
    color: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      default: 'md',
      validator: val => ['xs', 'sm', 'md', 'lg'].includes(val)
    },
    index: {
      type: String,
      default: '1'
    },
    wide: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    toRight: {
      type: Boolean,
      default: false
    },
    link: {
      type: [Object, String]
    },
    target: {
      type: String,
      default: '_self'
    },
  },
  computed: {
    classes() {
      let classes = ['btn']
      classes.push(this.size)
      classes.push(this.color)
      if (this.loading) classes.push('loading')
      if (this.wide) classes.push('wide')
      if (this.toRight) classes.push('toRight')
      if (this.class !== '') classes.push(this.class)
      return classes
    },
    isRouterLink() {
      return this.link && typeof this.link === 'object'
    },
    isLink() {
      return this.link && typeof this.link === 'string'
    },
    spinnerSize() {
      if (this.size === 'sm') return 'xxxs'
      else if (this.size === 'lg') return 'xs'
      else return 'xxs'
    }
  },
  methods: {
    click(e) {
      if (!this.disabled && !this.loading) this.$emit('click', e)
    },
    keydown(e) {
      if (!this.disabled && !this.loading) this.$emit('keydown', e)
    },
    keyup(e) {
      if (!this.disabled && !this.loading) this.$emit('keyup', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  @apply inline-flex text-md-r rounded content-center w-max cursor-pointer transition ease-linear outline-transparent align-middle select-none items-center;
  * {
    @apply truncate;
  }
  &:focus {}
  &.wide {
    @apply flex w-full justify-center;
  }
  &.toRight {
    @apply flex justify-start;
  }
  &:not(:disabled) {
    &.gray {
      @apply bg-gray-300 text-primary-text fill-dark;
      &:hover {
        @apply bg-gray-200;
      }
      &:active {
        @apply bg-gray-400;
      }
    }
    &.white {
      @apply bg-white text-dark fill-dark;
      &:hover {
        @apply bg-gray-300;
      }
      &:active {
        @apply bg-gray-400;
      }
    }
    &.dark {
      @apply bg-dark text-white fill-white;
      &:hover {
        @apply bg-dark-800;
      }
      &:active {
        @apply bg-dark-700;
      }
    }
  }
  &:disabled {
    @apply bg-dark-700 text-dark fill-dark cursor-not-allowed;
  }
  &.xs {
    @apply h-7 text-xs-m px-4 gap-2;
  }
  &.sm {
    @apply h-8 text-sm-m px-4 gap-2;
  }
  &.md {
    @apply h-8 p-1 px-2 gap-2;
  }
  &.lg {
    @apply h-12 px-8 gap-2;
  }
  &.hide {
    @apply hidden;
  }
}
</style>