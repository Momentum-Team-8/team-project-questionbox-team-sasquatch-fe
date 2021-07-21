import React from 'react';

export const WelcomePage = () => {
  return (
    <div>
      <h1>Welcome to Question Box</h1>
      <p>
        Users can post questions they need answered. You can read questions, but
        sign up to post one of your own or answer one!
      </p>
      <button
        className='button is-primary'
        //   onClick={() => (null)}
      >
        View all questions
      </button>
    </div>
  )
};
