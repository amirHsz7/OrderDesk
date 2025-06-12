<template>
  <div class="p-4 flex w-full flex-col gap-6">
    <div class=" text-6xl font-bold py-4 w-full border-b border-stroke">All Orders</div>
    <FilterModal :show="showModal" @close="closeModal" @submit="(i) => filterValue = i" />
    <div class="flex items-center gap-4">
      <!-- filter btn -->
      <Button @click="openModal" color="gray">
        filter
        <template #before>
          <i class="fas fa-sliders"></i>
        </template>
      </Button>
      <!-- badge -->
      <Badge size="lg" v-if="filterValue" color="finalized">
        <div class="flex items-center gap-2 text-primary-text">
          <div>{{filterValue.toString().toLowerCase()}}</div>

          <li class="fas fa-xmark cursor-pointer" @click="() => filterValue = null"></li>
        </div>
      </Badge>
    </div>

      <!-- table -->
      <Table :headers="['Order id', 'First name', 'Last name' , 'Country', 'Qty' , 'Total' , 'Order date' , 'Tags']" :rows="filteredRows" />
  </div>
</template>

<script>
import {getRequest , parseApiResponse} from "@/composables/ApiRequests"
import Table from "@/components/Table/Table.vue"
import Button from '@/components/Buttons/Button.vue'
import FilterModal from '@/components/Modal/FilterModal.vue'
import Badge from '@/components/Badge/Badge.vue'
export default {
  name: 'DashboardPage',
  layouts: 'DefaultLayout',
  components:{
    Table,
    Button,
    FilterModal,
    Badge
  },
   data() {
    return {
      rows : [],
      showModal : false,
      filterValue : null,
    }
  },
  computed: {
    searchId() {
      return this.$store.getters.getSearchId;
    },

    filteredRows() {
      let filteredData = null
      if (!this.searchId) filteredData = this.rows;
      else filteredData = this.rows.filter(item => item[0].toString().includes(this.searchId));

      if (this.filterValue){
        let filterval = this.filterValue.toString().toLowerCase()
        filteredData = filteredData.filter(innerArr => innerArr.some(item => item.toString().toLowerCase().includes(filterval)));
        console.log(filteredData);
        
      }
  
      return filteredData
    }
  },
  methods: {
    getData () {
      getRequest('https://dummyjson.com/c/1924-5416-40b1-a846')
        .then((response) => {
          const {data} = parseApiResponse(response)
          data.forEach(item => {
            this.rows.push(Object.values(item))
            
          });

        })
        .catch((error) => {
            console.log(error);
        })
      },
    openModal () {
      this.showModal = true
    },
    closeModal () {
      this.showModal = false
    },
    // submitFilter () {
    //   return this.filteredRows.filter(item => {
    //     item.includes(this.filterValue)
    //   })
    // }
  },

  mounted () {
    this.getData()
  }
}
</script>