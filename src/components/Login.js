import { useState } from 'react';
import { requestLogin } from '../api';

export function Login ({ isLoggedIn, setAuth }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState()

  function handleSubmit (event) {
    event.preventDefault()
    requestLogin(username, password)
      .then((data) => {
        if (data && data.auth_token) {
          setAuth(username, data.auth_token)
        }
      })
      .catch((error) => {
        setErrors(error.message)
      })
  }

  return (
    <div className='Login'>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {errors && <div class='bg-red white pa3'>{errors}</div>}

        <div className='mv2'>
          <label className='db mb2' htmlFor='username'>
            Username
          </label>
          <input
            type='text'
            id='username'
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div className='mv2'>
          <label className='db mb2' htmlFor='password'>
            Password
          </label>
          <input
            type='password'
            id='password'
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <button type='submit'>Log in</button>
      </form>
    </div>
  )
}
