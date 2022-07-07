<template>
  <div class="relative">
    <VCarousel/>
    <VCardContainer 
      :drinkList="drinkList" 
      :filterDrinkItem="filterDrinkItem"
    />
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  data() {
    return {
      drinkList: [],
      drinkItem: [],
      filterDrinkItem: []
    }
  },
  created () {
    this.$store.dispatch('drink/fetchDrinkList'); 
    this.$store.dispatch('drink/fetchDrinkItem');
    this.$store.dispatch('drink/fetchFilterDrinkItem', 'ca-phe')
  },
  async asyncData(ctx) {
    return {
      drinkList: ctx.store.getters['drink/getDrinkList'],
      drinkItem: ctx.store.getters['drink/getDrinkItem'],
      filterDrinkItem: ctx.store.getters['drink/getFilterDrinkItem'],
    }
  },
})
</script>
