import { React } from 'react'
import MemosSection from './MemosSection.jsx'
import AuthenticationProvider from './AuthenticationProvider.jsx'

function App () {
  return (
    <div>
      <AuthenticationProvider>
        <MemosSection />
      </AuthenticationProvider>
    </div>
  )
}

export default App
