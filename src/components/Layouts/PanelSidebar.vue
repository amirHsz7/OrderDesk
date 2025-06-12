<template>
  <div :class="classes">
    <!-- toggle button to open and close sidebar -->
    <div  @click="toggleSidebar" :class="{closed : close}" class="toggle-btn">
        <i :class="close ? 'rotate-180' : ''" class="fas fa-angle-left transition duration-500"></i>
    </div>
    <!-- static buttons -->
    <SidebarLink :minimal="close" text="Dashboard">
        <template #before>
            <i class="fas fa-home"></i>
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
            
        },
        handleResize () {
            const isDesktop = window.matchMedia('(min-width: 768px)').matches
            if (isDesktop) {
                this.close = false
            }
            else this.close = true
        }
    },
    mounted () {
        // handle close side bar when resize the screen
        window.addEventListener('resize', this.handleResize)
        this.handleResize()
        let size = window.matchMedia('(min-width: 768px)').matches
        if(size) this.close = false
    },
    beforeMount() {
        window.removeEventListener('resize', this.handleResize)
    }
}
</script>

<style lang="scss" scoped>
.sidebar{
    @apply relative flex flex-col gap-2 w-[190px] min-h-screen h-full transition-all duration-200 ;

    &.closed{
        @apply w-6 
    }
}

.toggle-btn{
    @apply px-2 max-w-[24px] rounded bg-white transition cursor-pointer duration-200 shadow ;

    &:not(.closed){
        @apply absolute top-0 right-4;
    }

    &.closed{
        @apply static
    }
    &:hover{
        @apply bg-gray-100;
    }
    
}
</style>