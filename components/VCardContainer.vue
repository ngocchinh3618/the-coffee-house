<template>
  <div>
    <VTitle
      :data-share-title="{
        icon: 'fa fa-trophy',
        iconSearch: 'fa fa-search',
        title: 'Sản phẩm từ Nhà',
      }"
    />
    <div class="flex justify-center px-4">
      <CardList :cardList="drinkList" v-if="drinkList.length > 0"/>
    </div>
    <div class="flex justify-center px-4">
      <CardItem :cardItem="filterDrinkItem" v-if="filterDrinkItem.length > 0"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardContainer',
  props: {
    drinkList: {
      type: Array,
      data: () =>[]
    },
    filterDrinkItem: {
      type: Array,
      data: () =>[]
    }
  }
}
</script>

<style>

</style>
