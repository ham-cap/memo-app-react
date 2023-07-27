import { React, useState, useContext } from 'react'
import MemosSection from './MemosSection.jsx'
import { IsLoggedInContext } from './IsLoggedInContext.js'

function App () {
  const isLoggedInContext = useContext(IsLoggedInContext)
  const [isloggedIn, setIsLoggedIn] = useState(isLoggedInContext)
  return (
    <div>
      <IsLoggedInContext.Provider value={[isloggedIn, setIsLoggedIn]}>
        <MemosSection />
      </IsLoggedInContext.Provider>
    </div>
  )
}

export default App
