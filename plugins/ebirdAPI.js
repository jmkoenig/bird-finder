/**
 * Inject axios instance for ebird API into context.
 */
export default ({ $axios, $config: { EBIRD_API_URL, EBIRD_API_KEY_NAME, EBIRD_API_KEY } }, inject) => {
  const ebirdConfig = {
    baseURL: EBIRD_API_URL,
    headers: {
      common: {
        [EBIRD_API_KEY_NAME]: EBIRD_API_KEY
      }
    }
  }
  const ebirdAPI = $axios.create(ebirdConfig);
  inject('ebirdAPI', ebirdAPI);
}