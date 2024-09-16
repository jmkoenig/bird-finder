/**
 * ACTIONS
 */
 import xml2js from 'xml2js';

export default {
  async nuxtServerInit({ dispatch }) {
    return await dispatch('populateStatesArray');
  },

  async populateStatesArray({ commit }) {
    const allStates = await this.$ebirdAPI.$get('/v2/ref/region/list/subnational1/US');
    commit('populateStatesArray', allStates);
  },

  async setStateBirds({ commit, getters }, currentState) {
    const regionCode = getters.getCurrentState(currentState)?.code;
    // const speciesList = await this.$ebirdAPI.$get(`/v2/product/spplist/${regionCode}`); // full species list
    // const birds = await this.$ebirdAPI.$get(`/v2/ref/taxonomy/ebird/?fmt=json&cat=species&species=${recentSpecies.toString()}`); // convert species list to bird objects array
    const params = `/v2/data/obs/${regionCode}/recent?maxResults=9&cat=species`; // recent 20 observations (last 14 days)
    const recentSpecies = await this.$ebirdAPI.$get(params);
    commit('setStateBirds', recentSpecies);
  },

  async setNotableBirds({ commit, getters }, currentState) {
    const regionCode = getters.getCurrentState(currentState)?.code;
    const params = `/v2/data/obs/${regionCode}/recent/notable?maxResults=9`;
    const notableBirds = await this.$ebirdAPI.$get(params);
    commit('setNotableBirds', notableBirds);
  },

  async setBirdImage({ commit }, payload) {
    try {
      /**
       * 1. Make one request to search for images of all birds using their common name
       */
      // Build titles query param by joining all common names with pipe
      const query = payload.birds?.map(bird => bird.commonName).join('|');
      const searchParams = `?action=query&prop=pageimages|pageprops&format=json&redirects&origin=*&titles=${query}`;
      const searchResponse = await this.$imageAPI.$get(searchParams);

      /**
       * 2. Use search response to get the full image url for each bird
       */
      const pages = searchResponse?.query?.pages;
      const imageUrls = [];
      Object.keys(pages).forEach(pageId => {
        imageUrls.push(pages[pageId].pageprops.page_image_free); // Use public domain version of image
      });
      const images = await Promise.all(imageUrls.map(img => {
        const imageRequestParams = `?action=query&format=json&prop=imageinfo&iiprop=url&redirects&origin=*&titles=File:${img}`;
        return this.$imageAPI.$get(imageRequestParams);
      }));
      images.forEach(img => {
        // Take the first object off of pages
        const key = Object.keys(img.query.pages)[0];
        const imageInfo = img.query.pages[key].imageinfo[0];
        console.log(imageInfo.url);
        // commit('setBirdImage', {
          
        // });
      });
    } catch (e) {
      console.error(e);
    }
  }
}