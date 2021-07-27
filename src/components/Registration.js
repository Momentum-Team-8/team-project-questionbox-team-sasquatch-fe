import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Registration = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="Name input" />
        </div>
      </div>

      <div class="field">
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input"
            type="text"
            placeholder="Username input"
            value=""
          />
          <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input
            class="input"
            type="email"
            placeholder="Email input"
            value=""
          />
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
          </span>
          <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
          </span>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link" type='submit'>Submit</button>
        </div>
        <div class="control">
          <Link to='/'>
          <button class="button is-link is-light">Cancel</button>
          </Link>
        </div>
      </div>
      </form>
    </div>
  );
};
