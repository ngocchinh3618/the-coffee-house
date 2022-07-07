<template>
  <div class="md:container md:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4 xl:grid-cols-6">
    <div class="shadow-bsd1 rounded-md p-3" v-for="(i,idx) in cardItem" :key="idx">
        <div @click="$router.push(`/product/${i.id}`)">
          <div class="pb-2">
            <img class="rounded-md" :src="i.thumbnail" alt="">
          </div>
          <div>
            <h4 class="font-semibold h-16 text-sm">{{i.name}}</h4>
          </div>
        </div>
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm">{{i.price}}đ</p>
          </div>
          <div>
            <button class="bg-c-orange3 p-2 rounded-full" onclick="document.getElementById('id01').style.display='block'" @click="item=i">
              <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYuODU3MTQgNi44NTcxNFYwSDkuMTQyODZWNi44NTcxNEgxNlY5LjE0Mjg2SDkuMTQyODZWMTZINi44NTcxNFY5LjE0Mjg2SDBWNi44NTcxNEg2Ljg1NzE0WiIgZmlsbD0id2hpdGUiLz4KPC9zdmc+Cg==" alt="">
            </button>
          </div>
        </div>
    </div>
    <ModalItem :item="item"/>
  </div>
</template>

<script>
export default {
  name: 'BaseCardItem',
  props:{
    cardItem:{
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      item: {},
    }
  }
}
</script>

<style>

</style>