<template>
  <div class="bg-main-blue text-white w-full px-6 py-2 flex items-center justify-between">
    <!-- logo place -->
    <div class="heading-6">
        OrderDesk
    </div>
    <!-- action bar -->
    <div class="flex items-center gap-4">
        <TextInput v-model="searchId" placeholder="Order ID" size="sm">
            <template #icon>
                <i class="fas fa-search"></i>
            </template>
        </TextInput>
        <div class="flex items-center gap-2">
            <i class="fas fa-user"></i>
            User name
        </div>
    </div>
  </div>
</template>

<script>
import TextInput from '../inputs/TextInput.vue'

export default {
    name: 'PanelHeader',
    components:{
        TextInput,
    },
    computed: {
        searchId: {
                get() {
                    return this.$store.getters.getSearchId;
                },
                set(value) {
                    this.$store.dispatch('updateSearchId', value);
                }
            }
    },
    data() {
        return {
        
        }
    },

    methods: {
        onInputChange(event) {
        this.$store.dispatch('updateSearchId', event.target.value);
        }
    }
}
</script>