import { React } from 'react'
import MemosSection from './MemosSection.jsx'
import LogInStatusProvider from './LogInStatusProvider.jsx'

function App () {
  return (
    <div>
      <LogInStatusProvider>
        <MemosSection />
      </LogInStatusProvider>
    </div>
  )
}

export default App
