import React from 'react'
import FormSwitcher from './FormSwitcher.jsx'
import PropTypes from 'prop-types'
import './style/MemoList.css'

export default class MemoList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isCreating: false,
      isChanging: false,
      isVisible: false,
      indexOfSelectedMemo: ''
    }
    this.displayCreateForm = this.displayCreateForm.bind(this)
    this.closeCreateForm = this.closeCreateForm.bind(this)
    this.closeEditForm = this.closeEditForm.bind(this)
  }

  displayCreateForm (e) {
    e.preventDefault()
    this.setState({ isCreating: true, isChanging: false, isVisible: true })
  }

  closeCreateForm () {
    this.setState({ isCreating: false, isVisible: false })
  }

  displayEditForm (index, e) {
    e.preventDefault()
    this.setState({
      isCreating: false,
      isChanging: true,
      isVisible: true,
      indexOfSelectedMemo: index
    })
    const selectedMemo = this.props.memos[index].join('\n')
    this.props.setSelectedMemo(selectedMemo)
  }

  closeEditForm () {
    this.setState({ isChanging: false, isVisible: false })
  }

  render () {
    const memos = this.props.memos
    const memoList = memos.map((memo, index) => (
      <li key={index}>
        <a onClick={() => this.displayEditForm(index, event)} href="#">
          {memo[0]}
        </a>
      </li>
    ))

    let form
    if (this.state.isVisible) {
      form = (
        <FormSwitcher
          newMemoText={this.props.newMemoText}
          isCreating={this.state.isCreating}
          isChanging={this.state.isChanging}
          onNewMemoTextChange={this.props.onNewMemoTextChange}
          addMemo={this.props.addMemo}
          closeCreateForm={this.closeCreateForm}
          editingMemoText={this.props.editingMemoText}
          onEditingMemoTextChange={this.props.onEditingMemoTextChange}
          updateMemo={this.props.updateMemo}
          closeEditForm={this.closeEditForm}
          selectedMemo={this.state.selectedMemo}
          indexOfSelectedMemo={this.state.indexOfSelectedMemo}
        />
      )
    } else {
      ;<div></div>
    }
    return (
      <div>
        {form}
        <ul>{memoList}</ul>
        <a
          className="linkForCreateForm"
          onClick={this.displayCreateForm}
          href="#"
        >
          +
        </a>
      </div>
    )
  }
}

MemoList.propTypes = {
  memos: PropTypes.array,
  onNewMemoTextChange: PropTypes.func,
  addMemo: PropTypes.func,
  newMemoText: PropTypes.string,
  editingMemoText: PropTypes.string,
  onEditingMemoTextChange: PropTypes.func,
  updateMemo: PropTypes.func,
  closeEditForm: PropTypes.func,
  setSelectedMemo: PropTypes.func
}
