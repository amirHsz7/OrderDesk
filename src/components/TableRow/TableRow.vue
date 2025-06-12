<template>
  <tr>
    <td v-for="(value, index) in rowData" :key="index">{{ value }}</td>
  </tr>
</template>

<script>
export default {
  name: "TableRow",
  props: {
    rowData: {
      type: Array,
      required: true
    }
  }
}
</script>