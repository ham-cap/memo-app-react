import { React, createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'

const IsLoggedInContext = createContext()

function LogInStatusProvider (props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const switchLogInStatus = () => setIsLoggedIn(!isLoggedIn)

  return (
    <IsLoggedInContext.Provider value={{ isLoggedIn, switchLogInStatus }}>
      {props.children}
    </IsLoggedInContext.Provider>
  )
}

export const useLogInStatus = () => useContext(IsLoggedInContext)

LogInStatusProvider.propTypes = {
  children: PropTypes.object
}

export default LogInStatusProvider
