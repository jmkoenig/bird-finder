/**
 * GETTERS
 */
export default {
  getCurrentState: (state) => (stateName) => {
    console.log(stateName);
    console.log('starting getCurrentState')
    let currentState = '';
    state.allStates.forEach(stateObj => {
      console.log(stateObj);
      if (stateObj.name === stateName) {
        currentState = stateObj;
      }
    })
    // return state.allStates.find(stateObj => stateObj.name === stateName);
    console.log(currentState);
    return currentState;
  },

  getAllStates: (state) => {
    return state.allStates;
  },

  getBirdsInState: (state) => {
    return state.birdsInState;
  }
}