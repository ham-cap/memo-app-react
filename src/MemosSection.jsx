import React from 'react'
import Form from './Form.jsx'
import MemoList from './MemoList.jsx'
import './style/MemoList.css'

export default class MemosSection extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      memos: [],
      isVisible: false,
      indexOfSelectedMemo: null
    }
    this.displayForm = this.displayForm.bind(this)
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

  closeForm () {
    this.setState({ isVisible: false, selectedMemo: '' })
  }

  displayForm (e, index = null) {
    e.preventDefault()
    this.setState({
      isVisible: true,
      indexOfSelectedMemo: index
    })
  }

  render () {
    return (
      <div className="listContainer">
        <div>
          <MemoList memos={this.state.memos} displayForm={this.displayForm} />
          <button className="linkForCreateForm" onClick={this.displayForm}>
            +
          </button>
        </div>
        {this.state.isVisible && (
          <Form
            memos={this.state.memos}
            indexOfSelectedMemo={this.state.indexOfSelectedMemo}
            closeForm={this.closeForm}
          />
        )}
      </div>
    )
  }
}
