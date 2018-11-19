import axios from "axios"
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("mobilex-token")
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, function (error) {
  return Promise.reject(error)
})
axios.interceptors.response.use(function (response) {
  try {
    if (response.data.status !== 1) {
      return Promise.reject(response.data)
    } else {
      return response.data;
    }
  } catch (error) {
    return Promise.reject(error);
  }
}, function (error) {
  return Promise.reject(error)
})
export default axios