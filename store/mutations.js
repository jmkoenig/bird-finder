/**
 * MUTATIONS
 */
export default {
  populateStatesArray(state, payload) {
    state.allStates = payload;
  },

  setStateBirds(state, payload) {
    state.birdsInState = payload;
  },

  setNotableBirds(state, payload) {
    state.notableStateBirds = payload;
  },

  setBirdImage(state, payload) {
    state.birdImages.push(payload);
  }
}