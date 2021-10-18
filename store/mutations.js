/**
 * MUTATIONS
 */
export default {
  populateStatesArray(state, payload) {
    state.allStates = payload;
  },

  setStateBirds(state, payload) {
    state.birdsInState = payload;
  }
}