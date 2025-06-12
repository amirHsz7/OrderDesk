<template>
  <div class="panel">
    <!-- panel header -->
    <PanelHeader />

    <!-- panel page -->
    <main class="panel-page container ">

      <!-- panel sidebar -->
      <PanelSidebar />

      <div class="rounded bg-white shadow">
        <!-- page -->
        <router-view />
      </div>

    </main>
  </div>
</template>

<script>
import PanelHeader from '../src/components/Layouts/PanelHeader.vue'
import PanelSidebar from '@/components/Layouts/PanelSidebar.vue';

export default {
    name: 'DefaultLayout',
    components: {
        PanelHeader,
        PanelSidebar,
    },
}
</script>

<style lang="scss">
.panel {
    @apply min-h-screen bg-gray-200 flex flex-col gap-4;
    // min-h-screen grid grid-cols-1 lg:grid-cols-[200px_1fr] grid-rows-[48px_1fr]

    // .panel-sidebar {
    //     @apply lg:row-[1/3] lg:col-[1/2];
    // }

    // .panel-header {
    //     @apply lg:col-[2/3]
    // }

    .panel-page {
        @apply px-4 grid grid-cols-[auto_1fr] gap-2 h-screen;
    }
}
</style>