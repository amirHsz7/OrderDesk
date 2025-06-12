<template>
  <transition name="modal-slide-down">
    <div v-if="show" @click="close" :class="classes" ref="modal">
      <div class="modal-bg"></div>
      <div class="scroll-box pretty-scroll">
        <div @click.stop class="modal-frame" :style="{ minHeight: minHeight }">
          <div class="header">
            <slot name="header" />
          </div>

          <div class="content overflow-auto pretty-scroll px-6">
            <slot />
          </div>

          <div class="grid items-center">
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import PageScroll from '@/composables/PageScroll'

export default {
  name: 'BaseModal',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: '552px'
    },
    minHeight: {
      type: String,
      default: '352px'
    },
    closable: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    classes() {
      return ['modal-component', this.class]
    }
  },
  watch: {
    show(val) {
      PageScroll(!val)
    }
  },
  methods: {
    close() {
      if (this.closable) {
        this.$emit('close')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-component {
  @apply fixed overflow-auto py-6 px-4 bottom-0 md:top-0 right-0 flex justify-center items-center h-screen w-screen z-[1001];

  .scroll-box {
    @apply fixed overflow-auto bottom-0 md:top-0 right-0 grid content-end lg:content-center lg:items-center h-screen w-screen z-[1002];

    .modal-frame {
      @apply grid overflow-hidden grid-rows-[max-content_1fr_max-content] max-w-screen-lg max-h-screen lg:max-h-[calc(100vh-32px)] lg:max-w-[552px] w-full min-h-[40vh] md:min-h-0 bg-white m-auto z-[1003] lg:rounded-xl shadow-xl;
    }
  }

  .modal-bg {
    @apply fixed w-full h-full top-0 left-0 opacity-50 bg-gray-100 ;
  }
}

// transitions
.modal-slide-down-enter-active,
.modal-slide-down-leave-active {
  transition: 0.4s;
  .modal-frame {
    transition: 0.4s;
  }
}

.modal-slide-down-enter,
.modal-slide-down-leave-to {
  @apply md:opacity-0;

  .modal-frame {
    @apply translate-y-[100%];
  }
}
</style>