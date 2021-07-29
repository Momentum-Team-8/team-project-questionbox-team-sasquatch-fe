import axios from 'axios';

export function requestLogin (email, password) {
  return axios
    .post('https://questionbox-sasmothbe.herokuapp.com/auth/token/login', {
      email: email,
      password: password
    })
}

export function requestLogout (token) {
  return axios
    .post('https://questionbox-sasmothbe.herokuapp.com/auth/token/logout',
      {
        headers: {
          Authorization: `Token ${token}`,
          'Content-Type': 'application/json'
        }
      })
    .then((response) => response)
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
