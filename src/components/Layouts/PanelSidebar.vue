<template>
  <div class="flex flex-col gap-2">
    <SidebarLink text="Dashboard">
        <template #before>
            <i class="fas fa-home"></i>
        </template>

        <template #after>
            <div class="px-2 py-1 rounded bg-white hover:bg-gray-100 transition cursor-pointer">
                <i class="fas fa-angle-left"></i>
            </div>
        </template>
    </SidebarLink>

    <SidebarLink text="Folders" selected>
        <template #before>
            <i class="fas fa-folder"></i>
        </template>
    </SidebarLink>

    <SidebarLink text="All Orders" selected>
        <template #before>
            <div class="w-4 flex justify-end">
                <div class="w-[2px] h-[24px] bg-secondary-blue"></div>
            </div>
        </template>
    </SidebarLink>

    <SidebarLink text="products">
        <template #before>
            <i class="fas fa-shopping-bag"></i>
        </template>
    </SidebarLink>

    <SidebarLink text="Work Flow" >
        <template #before>
            <i class="fas fa-chart-line"></i>
        </template>
    </SidebarLink>

    <SidebarLink text="Import/Export">
        <template #before>
            <i class="fas fa-right-from-bracket"></i>
        </template>
    </SidebarLink>

    <SidebarLink text="Integration">
        <template #before>
            <i class="fas fa-hands-helping"></i>
        </template>
    </SidebarLink>

    <SidebarLink text="Templates">
        <template #before>
            <i class="fas fa-clipboard"></i>
        </template>
    </SidebarLink>

    <SidebarLink text="Setting">
        <template #before>
            <i class="fas fa-cog"></i>
        </template>
    </SidebarLink>
  </div>
</template>

<script>
import SidebarLink from '../Buttons/SidebarLink.vue'

export default {
    name: 'PanelSidebar',
    components:{
        SidebarLink
    },
    data() {
        return {
        
        }
    },

    methods: {

    }
}
</script>