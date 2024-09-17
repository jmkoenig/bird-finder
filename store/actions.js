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

  // TODO: Client-side requests return a CORS error.
  // TODO: Make each image request(s) when the images are lazy loaded in, instead of here all at once.
  async setBirdImage({ commit }, payload) {
    try {
      /**
       * 1. Make one request to search for images of all birds using their common name
       */
      // Build titles query param by joining all common names with pipe
      const query = payload.birds?.map(bird => bird.comName).join('|');
      const searchParams = `?action=query&prop=pageimages|pageprops&format=json&redirects&origin=*&titles=${query}`;
      const searchResponse = await this.$imageAPI.$get(searchParams);

      /**
       * 2. Use search response to get the full image url for each bird
       */
      const pages = searchResponse?.query?.pages; // Object of data objects
      const redirects = searchResponse?.query?.redirects; // Array of objects pointing passed name to name returned in data
      const imageFiles = [];
      Object.keys(pages).forEach(pageId => {
        const page = pages[pageId];
        const redirect = redirects.find(name => name.to === page.title);
        const file = page.pageprops?.page_image_free; // Use public domain version of image
        imageFiles.push({
          originalName: redirect.from,
          redirectedName: redirect.to,
          file
        });
      });
      const images = await Promise.all(imageFiles.map(bird => {
        const imageRequestParams = `?action=query&format=json&prop=imageinfo&iiprop=url&redirects&origin=*&titles=File:${bird.file}`;
        return this.$imageAPI.$get(imageRequestParams);
      }));
      images.forEach((img, index) => {
        // Take the first object off of pages
        const key = Object.keys(img.query.pages)[0];
        const imageInfo = img.query.pages[key]?.imageinfo?.[0];
        const id = imageFiles[index].originalName?.toLowerCase().split(' ').join('_');
        commit('setBirdImage', {
          id,
          url: imageInfo.url
        });
      });
    } catch (e) {
      console.error(e);
    }
  }
}