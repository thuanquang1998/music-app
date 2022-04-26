// const instance = axios.create({
//     baseUrl: 'http://localhost:3000/user', //https://localhost:3000/api
//     timeout: 3000 , // milliseconds
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })

// // xu li data truoc khi xuong server
// instance.interceptors.request.use( async(config)=>{
//     console.log("truoc khi xuong server ");

//     if(config.url.indexOf('/user/login')>=0||config.url.indexOf('/refreshToken')>=0) {
//         return config
//     }
//     const token = await instance.getLocalAccessToken();
//     config.headers.Authorization = 'Bearer '+token;

//     // const {token, timeExpired} = await instance.getLocalAccessToken();

//     // const now = new Date().getTime();
//     // if(timeExpired<now) {
//     //     try {
//     //         console.log('AccessToken expired!!');
//     //         const {status, elements: {token, timeExpired}} = await refreshToken();
//     //         if(status === 'success') {
//     //             // set token vs timeExpired localStorage
//     //             await instance.setLocalAccessToken({token, timeExpired})
//     //             return config;
//     //         }
//     //     } catch (error) {
//     //         return Promise.reject(err)
//     //     }
//     // } => cach 1: check accessToken truoc khi gui request.

//     return config;
// }, err=>{
//     return Promise.reject(err)
// })

// // xu li data sau khi reponse tu server
// instance.interceptors.response.use( async(response)=>{
//     console.log("Sau khi server response ", response.data);
//     const config = response.config;
//     if(config.url.indexOf('/login')>=0 || config.url.indexOf('/refreshToken')>= 0){
//         // Nhung route khong can check token
//         return response
//     }

//     const {status, message} = response.data;
//     if(status && status===401) {
//         if(message && message==="jwt expired") {
//             console.log("Token het han");
//             // step 1: get token from refresh token
//             const {elements: {accessToken}} = await refreshToken();
//             if(accessToken) {
//                 console.log("da lay lai accessToken thanh cong");
//                 // step 2:
//                 config.headers.Authorization = 'Bearer '+accessToken;
//                 // step 3:
//                 await instance.setLocalAccessToken(accessToken);
//                 return instance(config);
//             }
//         }
//     }

//     return response
// }, err=>{
//     return Promise.reject(err)
// })

// // function
// const btn_login = document.getElementById('_login');
// if(btn_login) {
//     btn_login.addEventListener('click', async () => {
//         const {status, data} = await login();
//         // const {status, elements: {token, timeExpired}} = await login(); => cach 1
//         const {accessToken} = data;
//         if(status === 200) {
//             // set token vs timeExpired localStorage
//             // await instance.setLocalAccessToken({token, timeExpired}) => cach 1
//             await instance.setLocalAccessToken(accessToken) // => cach 2
//         }
//     })
// }

// const btn_getList = document.getElementById('_getList');
// if(btn_getList) {
//     btn_getList.addEventListener('click', async () => {
//         const users = await getUsers();
//     })
// }

// async function getUsers(){
//     const accessToken = await instance.getLocalAccessToken();
//     return (await instance.get('/user/list-user', accessToken)).data;
// }

// async function login(){
//     const data = {
//         email:"thuanquang3@gmail.com",
//         password:"123456"
//     }
//     return (await instance.post('/user/login',data));
// }

// async function refreshToken(){
//     // const accessToken = await getAccessToken();
//     return (await instance.get('/api/refreshToken')).data;
// }

// // Cach 1
// // instance.setLocalAccessToken = async ({token,timeExpired}) => {
// //     window.localStorage.setItem('accessToken', JSON.stringify({token, timeExpired}))
// // }

// // instance.getLocalAccessToken = async () => {
// //     const accessToken = window.localStorage.getItem('accessToken');
// //     return JSON.parse(accessToken)
// // }

// // Cach 2
// instance.setLocalAccessToken = async (token) => {
//     console.log('token :>> ', token);
//     window.localStorage.setItem('accessToken', JSON.stringify(token))
// }

// instance.getLocalAccessToken = async () => {
//     const accessToken = window.localStorage.getItem('accessToken');
//     return JSON.parse(accessToken)
// }

// import axios from 'axios';
// import queryString from 'query-string';
// import firebase from 'firebase';

// const getFirebaseToken = async () => {
//   const currentUser = firebase.auth().currentUser;
//   if (currentUser) return currentUser.getIdToken();

//   // Not logged in
//   const hasRememberedAccount = localStorage.getItem('firebaseui::rememberedAccounts');
//   if (!hasRememberedAccount) return null;

//   // Logged in but current user is not fetched --> wait (10s)
//   return new Promise((resolve, reject) => {
//     const waitTimer = setTimeout(() => {
//       reject(null);
//       console.log('Reject timeout');
//     }, 10000);

//     const unregisterAuthObserver = firebase.auth().onAuthStateChanged(async (user) => {
//       if (!user) {
//         reject(null);
//       }

//       const token = await user.getIdToken();
//       console.log('[AXIOS] Logged in user token: ', token);
//       resolve(token);

//       unregisterAuthObserver();
//       clearTimeout(waitTimer);
//     });
//   });
// }

// // Set up default config for http requests here
// // Please have a look at here `https://github.com/axios/axios#request- config` for the full list of configs
// const axiosClient = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
//   headers: {
//     'content-type': 'application/json',
//   },
//   paramsSerializer: params => queryString.stringify(params),
// });

// axiosClient.interceptors.request.use(async (config) => {
//   const token = await getFirebaseToken();
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

// axiosClient.interceptors.response.use((response) => {
//   if (response && response.data) {
//     return response.data;
//   }

//   return response;
// }, (error) => {
//   // Handle errors
//   throw error;
// });

// export default axiosClient;

export default {};
