<template>
<div>
    <Table :headers="['Order id', 'First name', 'Last name' , 'Country', 'Qty' , 'Total' , 'Order date' , 'Tags']" :rows="filteredRows" />
</div>
</template>

<script>
import {getRequest , parseApiResponse} from "@/composables/ApiRequests"
import Table from "@/components/Table/Table.vue"
export default {
  name: 'DashboardPage',
  layouts: 'DefaultLayout',
  components:{
    Table
  },
  data() {
    return {
      rows : []
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
    getData(){
      getRequest('https://dummyjson.com/c/1924-5416-40b1-a846')
        .then((response) => {
          const {data} = parseApiResponse(response)
          data.forEach(item => {
            this.rows.push(Object.values(item))
            
          });
          console.log('doneeeeeeee',data);

        })
        .catch((error) => {
            console.log('errrrrrrrrrrr',error);
        })
      }
  },

  mounted () {
    this.getData()
  }
}
</script>