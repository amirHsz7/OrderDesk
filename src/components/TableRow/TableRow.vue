<template>
  <tr class="border-b-2 border-gray-300"> 
    <td class="text-start" v-for="(value, index) in rowData" :key="index">
        
        <div class="flex items-center gap-2" v-if="rowData?.length -1 == index && value" >
            <div v-for="(item , index2) in value" :key="index2">
                <Badge :color="item.toLowerCase()"> {{item}} </Badge>
            </div>
        </div>
        <template v-else>
            {{ value }}
        </template>
    </td>
  </tr>
</template>

<script>
import Badge from '../Badge/Badge.vue'
export default {
  components: { Badge },
  name: "TableRow",
  props: {
    rowData: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
td{
    @apply text-primary-text;

    &:first-child{
        @apply text-secondary-blue font-bold
    }
}
</style>