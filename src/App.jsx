import React from 'react'
import MemoList from './MemoList.jsx'

class App extends React.Component {
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
    this.setState({ isVisible: false })
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
    this.setState({ isVisible: false })
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
          displayCreateForm={this.displayCreateForm}
          closeCreateForm={this.closeCreateForm}
          displayEditForm={this.displayEditForm}
          closeEditForm={this.closeEditForm}
          isCreating={this.state.isCreating}
          isChanging={this.state.isChanging}
          isVisible={this.state.isVisible}
          indexOfSelectedMemo={this.state.indexOfSelectedMemo}
        />
      </div>
    )
  }
}

export default App
