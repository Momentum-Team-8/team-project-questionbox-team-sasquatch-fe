import React from 'react'
import { useState } from 'react'

export const AnswerForm = () => {
  const [text, setText] = useState('')
  const handleChange = (event) => {
    setText(event.target.value)
  }
  return (
    <>
      <h1>Answer Form</h1>
      <input type='text' value={text} onChange={handleChange} />
      <div>
        <h2>What's in the input field becomes state!</h2>
        <p>And my component can use it however it wants. Like in its render:</p>
        <p>{text}</p>
        <input type="submit" value="Submit" />
      </div>
    </>
  )
}
