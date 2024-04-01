import React from 'react'

function Button({text, onClickHandler, classes}) {
   return (
      <button onClick={onClickHandler} className={`btn btn-primary ${classes}`}>{text}</button>
   )
}

export default Button
