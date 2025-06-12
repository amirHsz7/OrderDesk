<template>
  <div :class="classes" class="badge">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseBadge',
  props: {
    color: {
      type: String,
      default: 'finalized',
      validator(value) {
        return [
          "finalized","waiting","failed" // we can add more but u must added it to tailwind and style on the bottom
        ].includes(value);
      },
    },
    size: {
      type: String,
      default: 'md',
      validator(val) {
        return ['xs', 'sm', 'md', 'lg'].includes(val);
      }
    }
  },
  computed: {
    classes() {
      return [
        'badge',
        this.color,
        this.size
      ];
    }
  }
};
</script>

<style lang="scss" scoped>
.badge {
  @apply h-[24px] text-dark text-md-r w-fit py-[2px] px-[8px] inline-flex justify-center items-center rounded;

    &.finalized {
        @apply bg-gray-500;
    }

    &.failed {
        @apply bg-failed;
    }

    &.waiting {
        @apply bg-waiting;
    }

    &.xs {
        @apply text-xs-r py-0 px-[6px] leading-[11px];
    }
    &.sm {
        @apply text-xs-r;
    }
    &.md {
        @apply text-md-r;
    }
    &.lg {
        @apply text-lg-r;
    }
}
</style>
