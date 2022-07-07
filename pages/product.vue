<template>
  <div v-if="!$fetchState.pending" class="relative">
    <div class="mt-28">
      <VCardContainer 
        :drinkList="drinkList" 
        :filterDrinkItem="filterDrinkItem"
      />
    </div>
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
  async fetch () {
    await this.$store.dispatch('drink/fetchDrinkList'); 
    await this.$store.dispatch('drink/fetchDrinkItem');
    await this.$store.dispatch('drink/fetchFilterDrinkItem', 'ca-phe')
    this.drinkList = this.$store.getters['drink/getDrinkList'],
    this.drinkItem = this.$store.getters['drink/getDrinkItem'],
    this.filterDrinkItem = this.$store.getters['drink/getFilterDrinkItem']
  },
  // async asyncData(ctx) {
  //   await ctx.store.dispatch('drink/fetchDrinkList'); 
  //   await ctx.store.dispatch('drink/fetchDrinkItem');
  //   await ctx.store.dispatch('drink/fetchFilterDrinkItem', 'ca-phe')
  //   // return {
  //   //   drinkList: ctx.store.getters['drink/getDrinkList'],
  //   //   drinkItem: ctx.store.getters['drink/getDrinkItem'],
  //   //   filterDrinkItem: ctx.store.getters['drink/getFilterDrinkItem']
  //   // }
  // },
})
</script>
