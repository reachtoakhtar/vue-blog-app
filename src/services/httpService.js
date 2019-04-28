/**
 * Created by Akhtar on  25/04/2019.
 */

import axios from 'axios'

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500

  if (!expectedError) {
    window.console.log('Logging the error', error)
  }

  return Promise.reject(error)
})

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete
}
