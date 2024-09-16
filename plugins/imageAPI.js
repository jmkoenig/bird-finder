/**
 * Inject axios instance for image API into context.
 */
export default ({ $axios, $config: { WIKI_API_URL } }, inject) => {
  const config = {
    baseURL: WIKI_API_URL
  };
  const imageAPI = $axios.create(config);
  inject('imageAPI', imageAPI);
}