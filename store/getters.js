/**
 * GETTERS
 */
export default {
  getCurrentState: (state) => (stateName) => {
    let currentState = '';
    state.allStates.forEach(stateObj => {
      if (stateObj.name === stateName) {
        currentState = stateObj;
        return;
      }
    })
    // return state.allStates.find(stateObj => stateObj.name === stateName);
    return currentState;
  },

  getAllStates: (state) => {
    return state.allStates;
  },

  getBirdsInState: (state) => {
    return state.birdsInState;
  },

  getNotableBirds: (state) => {
    return state.notableStateBirds;
  },

  getBirdImage: (state) => (speciesName) => {
    return state.birdImages[speciesName];
  }
}