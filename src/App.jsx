import React from 'react'
import MemoList from './MemoList.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
    const currentMemos = this.getCurrentMemos()
    this.state = { newMemoText: '', editingMemoText: '', memos: currentMemos }
    this.handleNewMemoTextChange = this.handleNewMemoTextChange.bind(this)
    this.handleEditingMemoTextChange =
      this.handleEditingMemoTextChange.bind(this)
    this.addMemo = this.addMemo.bind(this)
    this.setSelectedMemo = this.setSelectedMemo.bind(this)
    this.updateMemo = this.updateMemo.bind(this)
    this.deleteMemo = this.deleteMemo.bind(this)
  }

  handleNewMemoTextChange (text) {
    this.setState({ newMemoText: text })
  }

  handleEditingMemoTextChange (text) {
    this.setState({ editingMemoText: text })
  }

  setSelectedMemo (memo) {
    this.setState({ editingMemoText: memo })
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
    const newMemo = this.state.newMemoText.split('\n')
    memos.push(newMemo)
    const json = JSON.stringify(memos, undefined, 0)
    localStorage.setItem('memos', json)
    this.setState({ newMemoText: '' })
  }

  updateMemo (index, e) {
    e.preventDefault()
    const currentMemos = this.state.memos
    currentMemos.splice(index, 1, this.state.editingMemoText.split('\n'))
    const json = JSON.stringify(currentMemos, undefined, 0)
    localStorage.setItem('memos', json)
    this.setState({ editingMemoText: '' })
  }

  deleteMemo (index, e) {
    e.preventDefault()
    const currentMemos = this.state.memos
    currentMemos.splice(index, 1)
    const json = JSON.stringify(currentMemos, undefined, 0)
    localStorage.setItem('memos', json)
    this.setState({ editingMemoText: '' })
  }

  render () {
    return (
      <div>
        <MemoList
          memos={this.state.memos}
          newMemoText={this.state.newMemoText}
          onNewMemoTextChange={this.handleNewMemoTextChange}
          addMemo={this.addMemo}
          editingMemoText={this.state.editingMemoText}
          onEditingMemoTextChange={this.handleEditingMemoTextChange}
          updateMemo={this.updateMemo}
          setSelectedMemo={this.setSelectedMemo}
          deleteMemo={this.deleteMemo}
        />
      </div>
    )
  }
}

export default App
