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
      filterDrinkItem: [],
      // newsItem: [],
      // newsList: [],
      filterNewsItem: []
    }
  },
  created () {
    this.$store.dispatch('drink/fetchDrinkList'); 
    this.$store.dispatch('drink/fetchDrinkItem');
    this.$store.dispatch('drink/fetchFilterDrinkItem', 'ca-phe')
    // this.$store.dispatch('news/fetchNewsItem')
    // this.$store.dispatch('news/fetchNewsList')
    // this.$store.dispatch('news/fetchFilterNewsItem', 'Ưu đãi đặc biệt')
  },
  async asyncData(ctx) {
    return {
      drinkList: ctx.store.getters['drink/getDrinkList'],
      drinkItem: ctx.store.getters['drink/getDrinkItem'],
      filterDrinkItem: ctx.store.getters['drink/getFilterDrinkItem'],
      // newsItem: ctx.store.getters['news/getNewsItem'],
      // newsList: ctx.store.getters['news/getNewsList'],
      // filterNewsItem: ctx.store.getters['news/getFilterNewsItem'],
    }
  },
})
</script>
