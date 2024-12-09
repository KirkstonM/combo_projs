import React, { useState } from 'react'
import Login from '../../Forms/Login'
import Register from '../../Forms/Register'
import "../../App.css";

const Auth = () => {

  const[isRegisteredUser, setIsRegisteredUser] = useState(false);


  const registeredUser = () => {
    setIsRegisteredUser(prev => !prev)
  }
  return (
    <div>
      <div className='auth--body'>
        <div className='auth--container'>
          <div className={`auth--img ${isRegisteredUser ? "switched" : ""}`}>
          </div>
          <div className={`auth--form ${isRegisteredUser ? "switched" : " "}`}>
            { isRegisteredUser
            ?
            <Login setIsRegisteredUser={setIsRegisteredUser}/>
            :
            <Register setIsRegisteredUser={setIsRegisteredUser}/>}

            <button onClick={registeredUser}> click </button>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Auth