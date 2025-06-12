<template>
  <div :class="classes">
    <!-- flex flex-col gap-2 -->
    <div v-if="close" @click="toggleSidebar" class="toggle-btn">
        <i :class=" close ? 'rotate-180' : ''" class="fas fa-angle-left transition"></i>
    </div>
    <SidebarLink :minimal="close" text="Dashboard">
        <template #before>
            <i class="fas fa-home"></i>
        </template>

        <template #after>
            <div @click="toggleSidebar" class="toggle-btn">
                <i :class=" close ? 'rotate-180' : ''" class="fas fa-angle-left transition"></i>
            </div>
        </template>
    </SidebarLink>

    <SidebarLink :minimal="close" text="Folders" selected nested>
        <template #before>
            <i class="fas fa-folder"></i>
        </template>
        <template #nested>
            <SidebarLink :minimal="close" text="All Orders" selected>
                <template #before>
                    <div class=" flex justify-end">
                        <div class="w-[2px] h-[24px] bg-secondary-blue"></div>
                    </div>
                </template>
            </SidebarLink>
        </template>
    </SidebarLink>

    <SidebarLink :minimal="close" text="products">
        <template #before>
            <i class="fas fa-shopping-bag"></i>
        </template>
    </SidebarLink>

    <SidebarLink :minimal="close" text="Work Flow" >
        <template #before>
            <i class="fas fa-chart-line"></i>
        </template>
    </SidebarLink>

    <SidebarLink :minimal="close" text="Import/Export">
        <template #before>
            <i class="fas fa-right-from-bracket"></i>
        </template>
    </SidebarLink>

    <SidebarLink :minimal="close" text="Integration">
        <template #before>
            <i class="fas fa-hands-helping"></i>
        </template>
    </SidebarLink>

    <SidebarLink :minimal="close" text="Templates">
        <template #before>
            <i class="fas fa-clipboard"></i>
        </template>
    </SidebarLink>

    <SidebarLink :minimal="close" text="Setting">
        <template #before>
            <i class="fas fa-cog"></i>
        </template>
    </SidebarLink>

    {{close}}
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
            close : false
        }
    },

    computed:{
        classes() {
            let classes = ['sidebar']
            
            if (this.close) classes.push('closed')
            else {
                    classes.includes('closed') ? classes.concat() : null
                }
            console.log(classes);
            return classes
        },
    },

    methods: {
        toggleSidebar () {
            this.close =! this.close
            
        }
    }
}
</script>

<style lang="scss" scoped>
.sidebar{
    @apply flex flex-col gap-2 w-[190px] transition-all;

    &.closed{
        @apply w-6 
    }
}

.toggle-btn{
    @apply px-2 rounded bg-white  transition cursor-pointer shadow;

    &:hover{
        @apply bg-gray-100;
    }
    
}
</style>