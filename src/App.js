import React from 'react'
import FormSwitcher from './FormSwitcher.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { newMemo: 'hogefugapuni', isChanging: false }
  }

  render () {
    return (
      <div>
        <FormSwitcher isChanging={this.state.isChanging} />
      </div>
    )
  }
}

export default App
