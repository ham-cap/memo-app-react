import React from 'react'
import Form from './Form.jsx'
import List from './List.jsx'
import './style/MemoList.css'

export default class Memo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      memos: [],
      isVisible: false,
      indexOfSelectedMemo: null,
      selectedMemo: ''
    }
    // this.addMemo = this.addMemo.bind(this)
    this.updateMemo = this.updateMemo.bind(this)
    this.deleteMemo = this.deleteMemo.bind(this)
    this.displayForm = this.displayForm.bind(this)
    this.setSelectedMemo = this.setSelectedMemo.bind(this)
    this.closeForm = this.closeForm.bind(this)
  }

  componentDidMount () {
    const currentMemos = this.getCurrentMemos()
    this.setState({ memos: currentMemos })
  }

  getCurrentMemos () {
    const memosJson = localStorage.getItem('memos')
    if (memosJson === null) {
      return []
    } else {
      const memosJson = localStorage.getItem('memos')
      const memos = JSON.parse(memosJson)
      return memos
    }
  }

  // addMemo (e, input) {
  //   e.preventDefault()
  //   if (input === '') return
  //   const memos = this.state.memos
  //   const newMemo = input.split('\n')
  //   memos.push(newMemo)
  //   const json = JSON.stringify(memos, undefined, 0)
  //   localStorage.setItem('memos', json)
  //   this.setState({ isVisible: false })
  // }

  updateMemo (e, index, input) {
    e.preventDefault()
    const currentMemos = this.state.memos
    currentMemos.splice(index, 1, input.split('\n'))
    const json = JSON.stringify(currentMemos, undefined, 0)
    localStorage.setItem('memos', json)
    this.setState({ isVisible: false, selectedMemo: '' })
  }

  deleteMemo (index, e) {
    e.preventDefault()
    const currentMemos = this.state.memos
    currentMemos.splice(index, 1)
    const json = JSON.stringify(currentMemos, undefined, 0)
    localStorage.setItem('memos', json)
    this.setState({ isVisible: false })
  }

  closeForm () {
    this.setState({ isVisible: false, selectedMemo: '' })
  }

  displayForm (e, index = null) {
    e.preventDefault()
    this.setState({
      isVisible: true,
      indexOfSelectedMemo: index
    })
    if (index !== null) {
      const selectedMemo = this.state.memos[index].join('\n')
      this.setSelectedMemo(selectedMemo)
    } else {
      this.setState({
        selectedMemo: ''
      })
    }
  }

  setSelectedMemo (memo) {
    this.setState({ selectedMemo: memo })
  }

  render () {
    return (
      <div className="listContainer">
        <div>
          <List memos={this.state.memos} displayForm={this.displayForm} />
          <button className="linkForCreateForm" onClick={this.displayForm}>
            +
          </button>
        </div>
        {this.state.isVisible && (
          <Form
            memos={this.state.memos}
            indexOfSelectedMemo={this.state.indexOfSelectedMemo}
            selectedMemo={this.state.selectedMemo}
            addMemo={this.addMemo}
            updateMemo={this.updateMemo}
            deleteMemo={this.deleteMemo}
            closeForm={this.closeForm}
            formTest={this.formTest}
          />
        )}
      </div>
    )
  }
}
