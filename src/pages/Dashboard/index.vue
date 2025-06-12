<template>
    <div>hello</div>
</template>

<script>
import {getRequest , parseApiResponse} from "@/composables/ApiRequests"
export default {
  name: 'DashboardPage',
  layouts: 'DefaultLayout',

  data() {
    return {
      
    }
  },

  methods: {
    getData(){
      getRequest('https://dummyjson.com/c/1924-5416-40b1-a846')
        .then((response) => {
          const {data} = parseApiResponse(response)
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