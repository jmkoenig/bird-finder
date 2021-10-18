/**
 * ACTIONS
 */

export default {
  async nuxtServerInit({ dispatch }) {
    return await dispatch('populateStatesArray');
  },

  async populateStatesArray({ commit }) {
    const allStates = await this.$ebirdAPI.$get('/ref/region/list/subnational1/US');
    commit('populateStatesArray', allStates);
  },

  async setStateBirds({ commit, getters }, currentState) {
    console.log('calling getCurrentState');
    console.log('currentState', currentState)
    const regionCode = getters.getCurrentState(currentState.name)?.code;
    // const regionCode = "US-AZ";
    console.log('regionCode', regionCode);
    const birds = await this.$ebirdAPI.$get(`/product/spplist/${regionCode}`);
    console.log('birds', birds);
    commit('setStateBirds', birds);
  }
}