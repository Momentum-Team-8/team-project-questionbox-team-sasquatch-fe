// import axios from 'axios'

// export function requestLogin (username, password) {
//   // a real login request would go here but in the meantime, we'll fake it
//   return fakeResponse(username, password)
// }

// // export function getQuestions () {
// //   return axios.get()
// //     .then(res => ())
// // }

// // export function getQuestionDetail () {
// //   return axios.get()
// //     .then(res => ())
// // }

// function fakeResponse(username, password) {
//   return new Promise((resolve, reject) => {
//     if (username && password) {
//       resolve({ auth_token: 'faketoken12345678' })
//     }
//     reject(new Error('Authentication failed!'))
//   })
// }