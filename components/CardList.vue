<template>
  <div class="flex overflow-x-auto mb-10">
    <div v-for="(i, idx) in cardList" :key="idx" class="text-center" @click="filterType(i, idx)">
      <div class="w-32">
        <div :class="{'bg-blend-multiply': selected === idx}" class="bg-nude2 w-14 h-14 md:w-20 md:h-20 rounded-full flex justify-center items-center m-auto">
          <img :src="i.img" :alt="i.name">
        </div>
        <p class="text-xs font-bold text-slate-400 mt-2 break-words m-auto w-15 md:w-20 pb-3">{{i.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseCardlist',
  props:{
    cardList:{
      type: Array,
      default: () => []
    }
  },
  data (){
    return{
      type: "ca-phe",
      selected: 0
    }
  },
  methods:{
    filterType (i, idx) {
      this.type = i.slug
      this.selected = idx
      this.$store.dispatch('drink/fetchFilterDrinkItem', i.slug)
    }
  }
}
</script>

<style>

</style>