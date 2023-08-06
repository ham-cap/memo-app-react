import { React } from 'react'
import MemosSection from './MemosSection.jsx'
import IsLoggedInProvider from './IsLoggedInProvider.jsx'

function App() {
  return (
    <div>
      <IsLoggedInProvider>
        <MemosSection />
      </IsLoggedInProvider>
    </div>
  )
}

export default App
