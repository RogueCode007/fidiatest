export const state = () => ({
    showNavItems: false
})
  

export const mutations = {
    toggleNav(state){
        state.showNavItems = !state.showNavItems
    }
  }