import React, { useCallback } from 'react'
import './Button.css'
const Button = ({ btnValue }) => {
  const logout = useCallback(() => {
    window.catalyst.auth.signOut('/')
  }, [])
  return (
    <div id='logoutbtn'>
      <button onClick={logout} id='logout'>
        {btnValue.title}
      </button>
    </div>
  )
}

export default Button
