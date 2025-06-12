<template>
  <!-- برای scroll خوردن خود table -->
  <div class="overflow-auto w-full">
    <table class="w-full" border="1" cellspacing="0" cellpadding="8">
      <thead>
        <!-- component draggable -->
        <draggable
          v-model="localHeaders"
          tag="tr"
          :options="{ animation: 150, handle: '.drag-handle' }"
        >
          <th
            v-for="(header, index) in localHeaders"
            :key="header.id"
            @click="sortBy(index)"
            class="cursor-pointer drag-handle text-xs text-nowrap hover:bg-stroke rounded transition select-none border-b border-gray-300 text-start"
          >
            {{ header.label }}
            <span v-if="sortColumn === index">
              <i :class="sortDirection === 'desc' ? 'rotate-180' : ''" class="fas fa-arrow-up transition text-xs"></i>
            </span>
          </th>
        </draggable>
      </thead>
      <tbody>
        <TableRow
          v-for="(row, rowIndex) in sortedRows"
          :key="rowIndex"
          :rowData="mapRowToHeader(row)"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import TableRow from '../TableRow/TableRow.vue'
import draggable from 'vuedraggable'
export default {
  name: 'TableComponent',
  components: {
    TableRow,
    draggable
  },
  props: {
    headers: {
      type: Array,
      required: true
    },
    rows: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      localHeaders: this.headers.map((h, i) => ({ id: i, label: h })), // برای index دادن به هر ستون header
      sortColumn: null,
      sortDirection: 'asc'
    }
  },
  computed: {
    // sort method for sorting row asc or desc
    sortedRows() {
      if (this.sortColumn === null) return this.rows
      return [...this.rows].sort((a, b) => {
        const valA = a[this.sortColumn]
        const valB = b[this.sortColumn]

        if (valA === valB) return 0

        const result = valA > valB ? 1 : -1
        return this.sortDirection === 'asc' ? result : -result
      })
    },
  },
  methods: {
    sortBy(index) {
      if (this.sortColumn === index) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'
      } else {
        this.sortColumn = index
        this.sortDirection = 'asc'
      }
    },
    // تبدیل کردن rows بر اساس header جدید
    mapRowToHeader(row) {
      return this.localHeaders.map(h => row[h.id])
    },
  }
}
</script>

<style scoped>
th{
    @apply text-primary-text text-lg-r
}

</style>