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
            <a href='#' class='navbar-item'>
              <i class='fas fa-home' /> Home
            </a>
          </Link>
          <Link to='/profile'>
            <a href='#' class='navbar-item'>
              <i class='far fa-user' /> Profile
            </a>
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
                  <a href='#' class='button is-primary'>
                    Search
                  </a>
                </div>
              </div>
              <Link to='/registration'>
                <a href='#' class='button is-light'>
                  <strong>Sign up</strong>
                </a>
              </Link>
              {token ? (
                <button class='button is-primary' onClick={handleLogout}>
                  Logout
                </button>
              ) : (
                <Link to='/login'>
                  <a href='#' class='button is-primary'>
                    Log in
                  </a>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
