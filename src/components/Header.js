import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { requestLogout } from '../api';

export const Header = (props) => {
  const { token, setToken } = props
  let history = useHistory()
  const handleLogout = () => {
    requestLogout(token)
    setToken('')
    history.push('/login')
  };
  return (
    <div className='container'>
      <div className='App' class='notification is-black'>
        <div class='navbar-start'>
          <h1 class='navbar-item has-text-white'>Question Box</h1>
          <Link to='/'>
            <button class='button is-primary is-light'>
              <i class='fas fa-home' /> Home
            </button>
          </Link>
          <Link to='/profile'>
            <button class='button is-primary is-light'>
              <i class='far fa-user' /> Profile
            </button>
          </Link>
        </div>
        <div class='navbar-end'>
          <div class='navbar-item'>
            <div class='field has-addons'>
              <div class='buttons' className='field is-grouped'>
                <div class='control'>
                  <input
                    class='input'
                    type='text'
                    placeholder='Find a question or a topic...'
                  />
                </div>
                <div class='control'>
                  <button class='button is-primary is-light'>Search</button>
                </div>
              </div>
              <Link to='/registration'>
                <button class='button is-primary is-light'>
                  <strong>Sign up</strong>
                </button>
              </Link>
              {token ? (
                <button
                  class='button is-primary is-light'
                  onClick={handleLogout}
                >
                  Logout
                </button>
              ) : (
                <Link to='/login'>
                  <button class='button is-primary is-light'>Log in</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
