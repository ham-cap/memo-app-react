import React from 'react'
import MemoList from './MemoList.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
    const currentMemos = this.getCurrentMemos()
    this.state = { newMemoText: '', memos: currentMemos }
    this.handleNewMemoTextChange = this.handleNewMemoTextChange.bind(this)
    this.addMemo = this.addMemo.bind(this)
  }

  handleNewMemoTextChange (text) {
    this.setState({ newMemoText: text })
  }

  getCurrentMemos () {
    if (Object.prototype.hasOwnProperty.call(localStorage, 'memos')) {
      const memosJson = localStorage.getItem('memos')
      const memos = JSON.parse(memosJson)
      return memos
    } else {
      return []
    }
  }

  addMemo (e) {
    e.preventDefault()
    if (this.state.newMemoText === '') return
    const memos = this.state.memos
    memos.push(this.state.newMemoText)
    const json = JSON.stringify(memos, undefined, 0)
    localStorage.setItem('memos', json)
    this.setState({ newMemoText: '' })
  }

  render () {
    return (
      <div>
        <MemoList
          memos={this.state.memos}
          newMemoText={this.state.newMemoText}
          onNewMemoTextChange={this.handleNewMemoTextChange}
          addMemo={this.addMemo}
        />
        <p>{this.state.newMemoText}</p>
        <p>{this.state.memos}</p>
      </div>
    )
  }
}

export default App
