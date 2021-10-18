/**
 * Inject axios instance for flickr API into context.
 */
export default ({ $axios, $config: { FLICKR_API_URL, FLICKR_API_KEY_NAME, FLICKR_API_KEY } }, inject) => {
  const flickrConfig = {
    baseURL: FLICKR_API_URL
  };
  const flickrAPI = $axios.create(flickrConfig);
  // add api key to query params on every request
  flickrAPI.onRequest((config) => {
    config.params = {
      ...config.params,
      [FLICKR_API_KEY_NAME]: FLICKR_API_KEY
    }
  });
  inject('flickrAPI', flickrAPI);
}