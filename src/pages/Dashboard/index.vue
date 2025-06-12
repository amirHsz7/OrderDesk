<template>
<div>

    <Modal :show="showModal" @close="closeModal">
      asdasd
    </Modal>
    <!-- filter btn -->
    <Button @click="openModal" color="gray">
      filter
      <template #before>
        <i class="fas fa-sliders"></i>
      </template>
    </Button>

    <!-- table -->
    <Table :headers="['Order id', 'First name', 'Last name' , 'Country', 'Qty' , 'Total' , 'Order date' , 'Tags']" :rows="filteredRows" />
</div>
</template>

<script>
import {getRequest , parseApiResponse} from "@/composables/ApiRequests"
import Table from "@/components/Table/Table.vue"
import Button from '@/components/Buttons/Button.vue'
import Modal from '@/components/Modal/Modal.vue'
export default {
  name: 'DashboardPage',
  layouts: 'DefaultLayout',
  components:{
    Table,
    Button,
    Modal
  },
   data() {
    return {
      rows : [],
      showModal : false
    }
  },
  computed: {
    searchId() {
      return this.$store.getters.getSearchId;
    },
    filteredRows() {
      if (!this.searchId) return this.rows;

      return this.rows.filter(item =>
        item[0].toString().includes(this.searchId)
      );
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
    }
  },

  mounted () {
    this.getData()
  }
}
</script>