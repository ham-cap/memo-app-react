import { React, createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'

const IsLoggedInContext = createContext()

function AuthenticationProvider (props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const logIn = () => setIsLoggedIn(true)

  const logOut = () => setIsLoggedIn(false)

  return (
    <IsLoggedInContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {props.children}
    </IsLoggedInContext.Provider>
  )
}

export const useAuthentication = () => useContext(IsLoggedInContext)

AuthenticationProvider.propTypes = {
  children: PropTypes.object
}

export default AuthenticationProvider
