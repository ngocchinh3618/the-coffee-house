// export const state = () => ({
//   newsItem: [],
//   newsList: [],
//   filterNewsItem: []
// })

// export const getters = {
//   getNewsItem (state) {
//     return state.newsItem
//   },
//   getNewsList (state) {
//     return state.newsList
//   },
//   getFilterNewsItem (state) {
//     return state.filterNewsItem
//   }
// }

// export const actions = {
//   // async fetchNewsItem({ commit }) {
//   //   try {
//   //     const data = await this.$newsRepository.index({})
//   //     commit('fetchNewsItem', data)
//   //   }
//   //   catch (error) {
//   //       console.log(error)
//   //   }
//   // },
//   // async fetchNewsList({ commit }) {
//   //   try {
//   //     const data = await this.$newsRepository.index({})
//   //     const item = data.news.map(e => e.name)
//   //     commit('fetchNewsList', item)
//   //   }
//   //   catch (error) {
//   //       console.log(error)
//   //   }
//   // },
//   // async fetchFilterNewsItem({ commit }, content) {
//   //   try {
//   //     const data = await this.$newsRepository.index({})
//   //     const filterNewsItem = data.news.filter(e => e.name === content)
//   //     commit('fetchFilterNewsItem', filterNewsItem[0].posts)
//   //   }
//   //   catch (error) {
//   //     console.log(error)
//   //   }
//   // }
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
//   async fetchNewsList({ commit }) {
//     try {
//       commit('fetchNewsList')
//     }
//     catch (error) {
//         console.log(error)
//     }
//   },
//   async fetchFilterNewsItem({ commit }, content) {
//     try {
//       commit('fetchFilterNewsItem', content)
//     }
//     catch (error) {
//       console.log(error)
//     }
//   }
// }

// export const mutations = {
//   fetchNewsItem (state, data){
//     state.newsItem.push(...data)
//   },
//   fetchNewsList (state){
//     const data = state.newsItem.map(e => e.name)
//     state.newsList.push(...data)
//   },
//   fetchFilterNewsItem (state, content){
//     const data = state.newsItem.filter(e => e.name === content)
//     console.log(data);
//     state.filterNewsItem.splice(0, state.filterNewsItem.length)
//     state.filterNewsItem.push(...data)
//   }
// }
