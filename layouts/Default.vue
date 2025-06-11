<template>
  <div class="panel">
    <!-- panel header -->
    <PanelHeader />
    <!-- panel sidebar -->
    <!-- <PanelSideBar /> -->

    <!-- panel page -->
    <main class="panel-page container">
      <router-view />
    </main>
  </div>
</template>

<script>
import PanelHeader from '../src/components/Layouts/PanelHeader.vue'
// import PanelSideBar from '@/components/Layouts/Panel/PanelSideBar.vue'

export default {
    name: 'DefaultLayout',
    components: {
        PanelHeader,
        // PanelSideBar,
    },
}
</script>

<style lang="scss">
.panel {
    @apply bg-gray-200 ;
    // min-h-screen grid grid-cols-1 lg:grid-cols-[200px_1fr] grid-rows-[48px_1fr]

    // .panel-sidebar {
    //     @apply lg:row-[1/3] lg:col-[1/2];
    // }

    // .panel-header {
    //     @apply lg:col-[2/3]
    // }

    // .panel-page {
    //     @apply py-4;
    // }
}
</style>