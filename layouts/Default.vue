<template>
  <div class="panel">
    <!-- panel header -->
    <PanelHeader />

    <!-- panel page -->
    <main class="panel-page ">

      <!-- panel sidebar -->
      <PanelSidebar />

      <div class="rounded container overflow-hidden bg-white shadow">
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

    .panel-page {
        @apply px-4 grid grid-cols-[auto_1fr] gap-2 min-h-screen;
    }
}
</style>