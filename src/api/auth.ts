// import firebase from 'firebase';

// const userApi = {
//   getMe: () => {
//     // TODO: Call API to get current user
//     return new Promise((resolve, reject) => {
//       // reject(new Error('MY CUSTOM ERROR'));
//       // return;

//       // Wait 500ms --> return result
//       setTimeout(() => {
//         const currentUser = firebase.auth().currentUser;

//         resolve({
//           id: currentUser.uid,
//           name: currentUser.displayName,
//           email: currentUser.email,
//           photoUrl: currentUser.photoURL,
//         })
//       }, 500);
//     })
//   }
// }

// export default userApi;

// import axiosClient from "./axiosClient";

// const productApi = {
//   getAll: (params) => {
//     const url = '/products';
//     return axiosClient.get(url, { params });
//   },

//   get: (id) => {
//     const url = `/products/${id}`;
//     return axiosClient.get(url);
//   },
// }

// export default productApi;

export default {};
