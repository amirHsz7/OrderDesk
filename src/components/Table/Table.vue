<template>
  <table border="1" cellspacing="0" cellpadding="8">
    <thead>
      <tr>
        <th
            v-for="(header, index) in headers"
            :key="index"
            @click="sortBy(index)"
            class="cursor-pointer"
        >
          {{ header }}
          <span v-if="sortColumn === index">
            {{ sortDirection === 'asc' ? '▲' : '▼' }}
          </span>
        </th>
      </tr>
    </thead>
    <tbody>
      <TableRow
        v-for="(row, index) in sortedRows"
        :key="index"
        :rowData="row"
      />
    </tbody>
  </table>
</template>

<script>
import TableRow from '../TableRow/TableRow.vue'

export default {
  name: 'TableComponent',
  components: {
    TableRow
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
      sortColumn: null,
      sortDirection: 'asc'
    }
  },
  computed: {
    sortedRows() {
      if (this.sortColumn === null) return this.rows
      return [...this.rows].sort((a, b) => {
        const valA = a[this.sortColumn]
        const valB = b[this.sortColumn]

        if (valA === valB) return 0

        const result = valA > valB ? 1 : -1
        return this.sortDirection === 'asc' ? result : -result
      })
    }
  },
  methods: {
    sortBy(index) {
      if (this.sortColumn === index) {
        this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc'
      } else {
        this.sortColumn = index
        this.sortDirection = 'asc'
      }
    }
  }
}
</script>