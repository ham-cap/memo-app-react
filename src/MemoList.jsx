import React from 'react'
import FormSwitcher from './FormSwitcher.jsx'
import Memo from './Memo.jsx'
import './style/MemoList.css'

export default class MemoList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newMemoText: '',
      editingMemoText: '',
      memos: [],
      isCreating: false,
      isChanging: false,
      isVisible: false,
      indexOfSelectedMemo: null
    }
    this.handleNewMemoTextChange = this.handleNewMemoTextChange.bind(this)
    this.handleEditingMemoTextChange =
      this.handleEditingMemoTextChange.bind(this)
    this.addMemo = this.addMemo.bind(this)
    this.setSelectedMemo = this.setSelectedMemo.bind(this)
    this.updateMemo = this.updateMemo.bind(this)
    this.deleteMemo = this.deleteMemo.bind(this)
    this.displayCreateForm = this.displayCreateForm.bind(this)
    this.displayEditForm = this.displayEditForm.bind(this)
    this.closeCreateForm = this.closeCreateForm.bind(this)
    this.closeEditForm = this.closeEditForm.bind(this)
  }

  componentDidMount () {
    const currentMemos = this.getCurrentMemos()
    this.setState({ memos: currentMemos })
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
    const memosJson = localStorage.getItem('memos')
    if (memosJson === null) {
      return []
    } else {
      const memosJson = localStorage.getItem('memos')
      const memos = JSON.parse(memosJson)
      return memos
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
    this.setState({ newMemoText: '', isVisible: false })
  }

  updateMemo (index, e) {
    e.preventDefault()
    const currentMemos = this.state.memos
    currentMemos.splice(index, 1, this.state.editingMemoText.split('\n'))
    const json = JSON.stringify(currentMemos, undefined, 0)
    localStorage.setItem('memos', json)
    this.setState({ editingMemoText: '', isVisible: false })
  }

  deleteMemo (index, e) {
    e.preventDefault()
    const currentMemos = this.state.memos
    currentMemos.splice(index, 1)
    const json = JSON.stringify(currentMemos, undefined, 0)
    localStorage.setItem('memos', json)
    this.setState({ editingMemoText: '', isVisible: false })
  }

  displayCreateForm (e) {
    e.preventDefault()
    this.setState({ isCreating: true, isChanging: false, isVisible: true })
  }

  closeCreateForm () {
    this.setState({ isVisible: false, newMemoText: '' })
  }

  displayEditForm (index, e) {
    e.preventDefault()
    this.setState({
      isCreating: false,
      isChanging: true,
      isVisible: true,
      indexOfSelectedMemo: index
    })
    const selectedMemo = this.state.memos[index].join('\n')
    this.setSelectedMemo(selectedMemo)
  }

  closeEditForm () {
    this.setState({ isVisible: false, editingMemoText: '' })
  }

  render () {
    return (
      <div className="listContainer">
        <div>
          <Memo
            memos={this.state.memos}
            displayEditForm={this.displayEditForm}
          />
          <button
            className="linkForCreateForm"
            onClick={this.displayCreateForm}
          >
            +
          </button>
        </div>
        {this.state.isVisible && (
          <FormSwitcher
            newMemoText={this.state.newMemoText}
            isCreating={this.state.isCreating}
            isChanging={this.state.isChanging}
            onNewMemoTextChange={this.state.onNewMemoTextChange}
            addMemo={this.addMemo}
            closeCreateForm={this.closeCreateForm}
            editingMemoText={this.state.editingMemoText}
            onEditingMemoTextChange={this.handleEditingMemoTextChange}
            updateMemo={this.updateMemo}
            closeEditForm={this.closeEditForm}
            indexOfSelectedMemo={this.state.indexOfSelectedMemo}
            deleteMemo={this.deleteMemo}
          />
        )}
      </div>
    )
  }
}
