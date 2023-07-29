import { createContext, useContext, useState } from 'react'

export const IsLoggedInContext = createContext()

export function useIsLoggedIn () {
  const isLoggedInContext = useContext(IsLoggedInContext)
  const [isLoggedIn, setIsLoggedIn] = useState(isLoggedInContext)
  return [isLoggedIn, setIsLoggedIn]
}
