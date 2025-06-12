<template>
  <div :class="classes">
    <!-- label -->
    <p v-if="label" class="label">
      {{ label }}
      <span v-if="required" class="star">*</span>
    </p>

    <!-- input box -->
    <div class="input-box">
      <!-- icon slot -->
      <slot name="icon"></slot>

      <!-- input -->
      <input 
        :disabled="disabled"
        :name="name"
        class="font-r"
        :tabindex="index"
        :type="type === 'password' ? passwordType : type"
        ref="inputElement"
        :placeholder="placeholder"
        :value="value" 
        @input="onInput" 
        @keyup="onKeyup" 
        @keydown="onKeydown" 
        @blur="onBlur" 
        @focus="onFocus"
        :autocomplete="autocomplete"
      >

      <!-- after slot -->
      <slot name="after"></slot>

      <!-- unit -->
      <div class="unit" v-if="unit">
        <span>{{ unit }}</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TextInput',
  props: {
    value: {
      // Vue 2: مدل داده‌ای با prop 'value'
      type: [String, Number],
      default: ''
    },
    type: {
      type: String,
      default: 'text',
      validator: val => ['text', 'number', 'password', 'email'].includes(val)
    },
    label: String,
    placeholder: String,
    unit: String,
    hint: String,
    slugPrefix: String,
    slug: String,
    name: String,
    index: {
      type: String,
      default: '1'
    },
    size: {
      type: String,
      default: 'md',
      validator: val => ['sm', 'md', 'lg'].includes(val)
    },
    ltr: {
      type: Boolean,
      default: false
    },
    ltrPlaceholer: {
      type: Boolean,
      default: false
    },
    showPasswordToggler: {
      type: Boolean,
      default: true
    },
    error: {
      type: [String, Boolean],
      default: ''
    },
    autocomplete: {
      type: String,
      default: ''
    },
    autoFocus: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    required: {
      type: Boolean,
      default: false
    },
    subtitle: {
      type: Boolean,
      default: false
    },
    financial: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      visible: false,
      focused: false
    }
  },
  computed: {
    classes() {
      let classes = ['text-input', this.size]
      if (this.disabled) classes.push('disabled')
      if (this.error) classes.push('error')
      if (this.required) classes.push('required')
      if (this.focused) classes.push('focus')
      if (this.ltr) classes.push('ltr')
      if (this.ltrPlaceholer) classes.push('ltr-placeholder')
      if (this.unit) classes.push('has-unit')
      return classes
    },
    passwordType() {
        return this.visible ? 'text' : 'password'
        }
    },
    mounted() {
        if (this.autoFocus) {
        this.$refs.inputElement.focus()
        }
    },
    methods: {
    onInput(event) {
        let newValue = event.target.value
        if (this.type === 'number') {
        newValue = Number(newValue)
        }
        this.$emit('input', newValue)       // برای v-model
        this.$emit('changed', newValue)     // همون ایونت changed
    },
    onKeyup(event) {
        this.$emit('keyup', event, this.name)
    },
    onKeydown(event) {
        this.$emit('keydown', event, this.name)
    },
    onFocus(event) {
        event.preventDefault()
        this.focused = true
        this.$emit('focus', event, this.name)
    },
    onBlur(event) {
        event.preventDefault()
        this.focused = false
        this.$emit('blur', event, this.name)
    },
    togglePasswordVisibility() {
        this.visible = !this.visible
        this.$refs.inputElement.focus()
    },
    makeFocus() {
        this.$refs.inputElement.focus()
    }
    }
}
</script>

<style lang="scss">
.text-input {
  @apply grid gap-2 h-max;

  .label {
    @apply text-sm-r text-dark;

  }

  .input-box {
    @apply flex gap-4 rounded items-center border border-stroke outline outline-2 outline-transparent bg-transparent transition;

    input {
      @apply bg-transparent outline-none block w-full;
    }

    .unit {
      @apply bg-stroke h-full flex items-center justify-center text-primary-text text-md-r rounded-e-lg;
    }

    .type-toggler {
      min-width: 20px !important;
      height: 20px !important;
      @apply cursor-pointer;
    }
  }


  &.md {
    .input-box {
      @apply h-12 px-4;

      .uicon {
        min-width: 20px !important;
        height: 20px !important;
        @apply fill-secondary-text;
      }
    }

    &:is(.has-unit) {
      .input-box {
        @apply pl-0;

        .unit {
          @apply p-2 min-w-12;
        }
      }
    }
  }

  &.sm {
    .input-box {
      @apply h-8 px-4;

      .uicon {
        min-width: 16px !important;
        height: 16px !important;
        @apply fill-secondary-text;
      }
    }

    &:is(.has-unit) {
      .input-box {
        @apply pl-0;

        .unit {
          @apply p-2 min-w-10;
        }
      }
    }
  }

  &.lg {
    .input-box {
      @apply h-14 px-4;

      .uicon {
        min-width: 24px !important;
        height: 24px !important;
        @apply fill-secondary-text;
      }
    }

    &:is(.has-unit) {
      .input-box {
        @apply pl-0;

        .unit {
          @apply p-2 min-w-14;
        }
      }
    }
  }

  &:not(.disabled):not(.error) {
    .input-box {
      &:hover {
        @apply border-gray-200 bg-gray-200 bg-opacity-10 outline outline-2 outline-gray-200;
      }
    }

    &.focus {
      .input-box {
        @apply border-gray-200 bg-gray-200 bg-opacity-10 outline outline-2 outline-gray-200;
      }
    }
  }

  &.disabled {
    .input-box {
      @apply opacity-70;
    }
  }
}

</style>
