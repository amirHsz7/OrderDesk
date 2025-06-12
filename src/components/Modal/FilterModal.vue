<template>
    <BaseModal :show="show" @close="close">
    <!-- modal header -->
    <template #header>
        <div class="px-4 py-2 heading-6 border-b border-gray-300">
        Filter Modal
        </div>
    </template>

    <!-- modal body -->
    <text-input autoFocus v-model="filterValue" class="py-6" placeholder="Search whatever you want..." size="md">
        <template #icon>
            <i class="fas fa-search"></i>
        </template>
    </text-input>

    <!-- modal footer -->
    <template #footer>
        <div class="grid grid-cols-2 gap-4 p-4">
        <Button wide size="lg" @click="submit" color="dark">
            filter
            <template #before>
            <i class="fas fa-check"></i>
            </template>
        </Button>

        <Button @click="close" wide size="lg" color="gray">
            cancel
            <template #before>
            <i class="fas fa-times"></i>
            </template>
        </Button>
        </div>
    </template>
</BaseModal>
</template>

<script>
import BaseModal from './BaseModal.vue'
import Button from '@/components/Buttons/Button.vue'
import TextInput from '../inputs/TextInput.vue'

export default {
  name: 'FilterModal',
  components:{
    BaseModal,
    Button,
    TextInput
  },
  props: {
    show:{
        type:Boolean,
        default:false
    },
  },
  data () {
    return {
        filterValue : null
    }
  },
  methods:{
    close () {
        this.$emit('close')
        this.filterValue = null
    },
    submit () {
        this.$emit('submit',this.filterValue)
        this.$emit('close')
        this.filterValue = null
    }
  }
}
</script>