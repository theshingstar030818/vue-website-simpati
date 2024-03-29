import axios from "../../../axios/index.js"
import store from "../../../../store/store.js"

// Token Refresh
let isAlreadyFetchingAccessToken = false
let subscribers = []

function onAccessTokenFetched(access_token) {
  subscribers = subscribers.filter(callback => callback(access_token))
}

function addSubscriber(callback) {
  subscribers.push(callback)
}

export default {
  init() {
    axios.interceptors.response.use(function (response) {
      return response
    }, function (error) {
      // const { config, response: { status } } = error
      const { config, response } = error
      const originalRequest = config

      // if (status === 401) {
      if (response && response.status === 401) {
        if (!isAlreadyFetchingAccessToken) {
          isAlreadyFetchingAccessToken = true
          store.dispatch("auth/fetchAccessToken")
            .then((access_token) => {
              isAlreadyFetchingAccessToken = false
              onAccessTokenFetched(access_token)
            })
            .catch(error => { 
            })
          }

        // console.log(originalRequest);
        // const retryOriginalRequest = new Promise((resolve) => {
        //   addSubscriber(access_token => {
        //     console.log("aaaaaaaaaaaa");
        //     originalRequest.headers.Authorization = 'Bearer ' + access_token
        //     resolve(axios(originalRequest))
        //   })
        // })
        // console.log("bbbbbbbbb");
        // console.log(retryOriginalRequest)
        // return retryOriginalRequest
        return originalRequest;
      }
      return Promise.reject(error)
    })
  },
  login(email, pwd) {
    return axios.post("/api/auth/login", {email: email, password: pwd})
  },
  registerUser(displayName, email, pwd) {
    // console.log("!!!!!!!!!!!!!!!!!!" + displayName);
    // return axios.post("/api/auth/register", {displayName: name, email: email, password: pwd})
    return axios.post("/api/auth/register", {name: displayName, email: email, password: pwd, c_password: pwd})
  },
  refreshToken() {
    return axios.post("/api/auth/refresh-token", {accessToken: localStorage.getItem("accessToKen")})
  }
}
