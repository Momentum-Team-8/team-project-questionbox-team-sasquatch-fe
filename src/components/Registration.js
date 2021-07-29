import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

export const Registration = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const history = useHistory()

  const handleSubmit = (event) => {
    event.preventDefault()
    axios
      .post(
        "https://questionbox-sasmothbe.herokuapp.com/api/accounts/signup",
        {
          name: name,
          email: email,
          password: password,
          password2: confirmPassword
        },
      )
      .then((response) => {
        console.log(response)
        history.push("/login");
      });
  }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input class="input" 
              type="text" 
              placeholder="Name input" 
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="email"
              placeholder="Email input"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <span class="icon is-small is-left">
              <i class="fas fa-envelope"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-exclamation-triangle"></i>
            </span>
          </div>
        </div>

        <div class="field">
          <label class="label">Password</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="password"
              placeholder="Password (must be longer than 6 digits)"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
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
          <label class="label">Confirm Password</label>
          <div class="control has-icons-left has-icons-right">
            <input
              class="input"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
            />
            <span class="icon is-small is-left">
              <i class="fas fa-user"></i>
            </span>
            <span class="icon is-small is-right">
              <i class="fas fa-check"></i>
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
