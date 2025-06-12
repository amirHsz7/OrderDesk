<template>
  <div>
    <router-link :to="url" :class="classes">
      <!-- icon -->
      <div class="before-slot">
          <slot name="before"/>
      </div>

      <div v-if="!minimal" class="min-w-[128px] main">
          {{ text }}
      </div>

      <!-- after -->
      <div v-if="!minimal" class="after-slot">
          <slot name="after"/>
      </div>

    </router-link>
    <div class="ml-4 mt-2" v-if="nested && !minimal">
      <slot name="nested"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'SidebarLink',
  props: {
    text: {
      type: String,
    },
    url: {
      type: String,
      default: '/'
    },
    selected: {
      type: Boolean,
      default: false
    },
    minimal: {
      type: Boolean,
      default: false
    },
    nested: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      visible: false,
      focused: false
    }
  },
  computed: {
    classes() {
      let classes = ['side-bar-link', this.size]
      if (this.selected) classes.push('selected')

      return classes
    },
    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style lang="scss">
.side-bar-link{
    @apply grid grid-cols-[auto_1fr_auto] items-center gap-2 text-primary-text fill-primary-text transition;

    &:hover:not(.selected){
      .main ,.before-slot{
        @apply text-secondary-blue
      }
    }

    &.selected{
        @apply text-secondary-blue fill-secondary-blue
    }

}
</style>
