import { React, createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'

const IsLoggedInContext = createContext()

function IsLoggedInProvider (props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <IsLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {props.children}
    </IsLoggedInContext.Provider>
  )
}

export function useIsLoggedIn () {
  const { isLoggedIn, setIsLoggedIn } = useContext(IsLoggedInContext) // useState(false)
  return { isLoggedIn, setIsLoggedIn }
}

IsLoggedInProvider.propTypes = {
  children: PropTypes.object
}

export default IsLoggedInProvider
