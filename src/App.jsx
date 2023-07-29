import { React } from 'react'
import MemosSection from './MemosSection.jsx'
import { IsLoggedInContext, useIsLoggedIn } from './IsLoggedInContext.js'

function App () {
  const [isLoggedIn, setIsLoggedIn] = useIsLoggedIn()
  return (
    <div>
      <IsLoggedInContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
        <MemosSection />
      </IsLoggedInContext.Provider>
    </div>
  )
}

export default App
