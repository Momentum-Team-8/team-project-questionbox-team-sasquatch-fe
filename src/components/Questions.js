import React, { useState } from 'react'
import { results } from '../Data'

export const Questions = () => {
  const [questions] = useState([
    {
        “Title”: “Is this right?”,
        “Body”:  “I sure hope it is, I don’t want to have to redo all of this.”,
        “Author”: “Edith Wilson”,
        “Favorited_by”: [an array of users]
        “Created_at”: “07-21-2021”,
        “Answers”: [an array of answers]
          
    },
    {
        “Title”: “What is happening?”,
        “Body”:  “Body body body body body hehehe.”,
        “Author”: “Mr Someone”,
        “Favorited_by”: [an array of users]
        “Created_at”: “07-21-2021”,
        “Answers”: [an array of answers]
          
    },
    {
        “Title”: “test question”,
        “Body”:  “me explaining my question and problems over and over.”,
        “Author”: “Me Sara”,
        “Favorited_by”: [an array of users]
        “Created_at”: “07-21-2021”,
        “Answers”: [an array of answers]
          
    },
    {
        “Title”: “What is this?”,
        “Body”:  “More and more information about this problem we are having ”,
        “Author”: “Greg”,
        “Favorited_by”: [an array of users]
        “Created_at”: “07-21-2021”,
        “Answers”: [an array of answers]
          
    }
])
return (
    <div>
        <h1>All questions</h1>
        <div>
            {questions.map((ask, idx) => {
                return (
                    console.log(ask)
                )
            }
            )
            }
        </div>
    </div>
)