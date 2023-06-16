/**
 * ACTIONS
 */
 import xml2js from 'xml2js';

export default {
  async nuxtServerInit({ dispatch }) {
    return await dispatch('populateStatesArray');
  },

  async populateStatesArray({ commit }) {
    const allStates = await this.$ebirdAPI.$get('/ref/region/list/subnational1/US');
    commit('populateStatesArray', allStates);
  },

  async setStateBirds({ commit, getters }, currentState) {
    const regionCode = getters.getCurrentState(currentState)?.code;
    // const speciesList = await this.$ebirdAPI.$get(`/product/spplist/${regionCode}`); // full species list
    // const birds = await this.$ebirdAPI.$get(`/ref/taxonomy/ebird/?fmt=json&cat=species&species=${recentSpecies.toString()}`); // convert species list to bird objects array
    const params = `/data/obs/${regionCode}/recent?maxResults=9&cat=species`; // recent 20 observations (last 14 days)
    const recentSpecies = await this.$ebirdAPI.$get(params);
    commit('setStateBirds', recentSpecies);
  },

  async setNotableBirds({ commit, getters }, currentState) {
    const regionCode = getters.getCurrentState(currentState)?.code;
    const params = `/data/obs/${regionCode}/recent/notable?maxResults=9`;
    const notableBirds = await this.$ebirdAPI.$get(params);
    commit('setNotableBirds', notableBirds);
  },

  async setBirdImage({ commit }, payload) {
    // url_n = 320px width image
    const params = `?method=flickr.photos.search&api_key=${process.env.FLICKR_API_KEY}&per_page=5&license=4&media=photos&extras=license,owner_name,date_taken,url_n&sort=date-taken-desc&tags=${payload.sciName}`;
    const image = await this.$flickrAPI.$get(params);
    const speciesImage = {};
    xml2js.parseString(image, (err, result) => {
      if (result?.rsp?.photos?.[0]?.photo?.[0]?.$) {
        speciesImage[payload.sciName] = result.rsp.photos[0].photo[0].$;
      } else {
        speciesImage[payload.sciName] = {}
      }
    });
    commit('setBirdImage', speciesImage);
  }
}