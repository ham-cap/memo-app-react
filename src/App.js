import React from 'react'
import MemoList from './MemoList.jsx'
// import FormSwitcher from './FormSwitcher.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { newMemoText: '' }
    this.handleNewMemoTextChange = this.handleNewMemoTextChange.bind(this)
  }

  handleNewMemoTextChange (text) {
    this.setState({ newMemoText: text })
  }

  render () {
    const memos = ['hoge', 'fuga', 'puni']
    return (
      <div>
        <MemoList memos={memos} newMemoText={this.state.newMemoText} onNewMemoTextChange={this.handleNewMemoTextChange} />
        <p>{this.state.newMemoText}</p>
      </div>
    )
  }
}

export default App
