import axios from 'axios';

export function requestLogin (username, password) {
  // a real login request would go here but in the meantime, we'll fake it
  return fakeResponse(username, password)
}
function fakeResponse (username, password) {
  return new Promise((resolve, reject) => {
    if (username && password) {
      resolve({ auth_token: 'faketoken12345678' })
    }
    reject(new Error('Authentication failed!'))
  })
}

export function getQuestions () {
  return axios
    .get('https://questionbox-sasmothbe.herokuapp.com/api/questions/')
    .then((res) => res.data)
}

export function getQuestionDetail (id) {
  return axios
    .get(`https://questionbox-sasmothbe.herokuapp.com/api/questions/${id}/`)
    .then((res) => res.data)
}


