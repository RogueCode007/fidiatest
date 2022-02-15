<template>
  <div class="">
    <dashboard-cards></dashboard-cards>
    <dashboard-table></dashboard-table>
  </div>
</template>

<script>
import DashboardCards from './DashboardCards.vue'
import DashboardTable from './DashboardTable.vue'
export default {
  components: { DashboardCards, DashboardTable },
}
</script>
