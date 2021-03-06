export const state = () => ({
  drinkList: [],
  drinkItem: [],
  filterDrinkItem: []
})

export const getters = {
  getDrinkList (state) {
    return state.drinkList
  },
  getDrinkItem (state) {
    return state.drinkItem
  },
  getFilterDrinkItem (state) {
    return state.filterDrinkItem
  }
}

export const actions = {
  async fetchDrinkItem({ commit }) {
    try {
      const data = await this.$menuRepository.create({})
      commit('fetchDrinkItem', data.menu)
    }
    catch (error) {
        console.log(error)
    }
  },
  async fetchDrinkList({ commit }) {
    try {
      const data = await this.$menuRepository.create({})
      const item = data.menu.map(e => (
        {
          name: e.name,
          img: e.thumbnail,
          slug: e.slug
        }
      ))
      commit('fetchDrinkList', item)
    }
    catch (error) {
        console.log(error)
    }
  },
  async fetchFilterDrinkItem({ commit }, content) {
    try {
      const data = await this.$menuRepository.create({})
      const filterDrinkItem = data.menu.filter(e => e.slug === content)
      commit('fetchFilterDrinkItem', filterDrinkItem[0].products)
    }
    catch (error) {
      console.log(error)
    }
  }
}

export const mutations = {
  fetchDrinkList (state, data){
    state.drinkList.splice(0, state.drinkList.length)
    state.drinkList.push(...data)
  },
  fetchDrinkItem (state, data){
    state.drinkItem.splice(0, state.drinkItem.length)
    state.drinkItem.push(...data)
  },
  fetchFilterDrinkItem (state, data){
    state.filterDrinkItem.splice(0, state.filterDrinkItem.length)
    state.filterDrinkItem.push(...data)
  }
}

//   async fetchNewsItem({ commit }) {
//     const intval = setInterval(async () => {
//       const data = await this.$newsRepository.index({})
//       console.log('news ' + data.news)
//       if (data?.news?.length > 0) {
//         commit('fetchNewsItem', data.news)
//         clearInterval(intval)
//       }
//     }, 1000)
//     // }
//     // catch (error) {
//     //     console.log(error)
//     // }
//   },