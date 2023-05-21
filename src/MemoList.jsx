import React from 'react'
import FormSwitcher from './FormSwitcher.jsx'
import PropTypes from 'prop-types'
import './style/MemoList.css'

export default class MemoList extends React.Component {
  render () {
    const memos = this.props.memos
    const memoList = memos.map((memo, index) => (
      <li key={index}>
        <a onClick={() => this.props.displayEditForm(index, event)} href="#">
          {memo[0]}
        </a>
      </li>
    ))

    let form
    if (this.props.isVisible) {
      form = (
        <FormSwitcher
          newMemoText={this.props.newMemoText}
          isCreating={this.props.isCreating}
          isChanging={this.props.isChanging}
          onNewMemoTextChange={this.props.onNewMemoTextChange}
          addMemo={this.props.addMemo}
          closeCreateForm={this.props.closeCreateForm}
          editingMemoText={this.props.editingMemoText}
          onEditingMemoTextChange={this.props.onEditingMemoTextChange}
          updateMemo={this.props.updateMemo}
          closeEditForm={this.props.closeEditForm}
          indexOfSelectedMemo={this.props.indexOfSelectedMemo}
          deleteMemo={this.props.deleteMemo}
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
          onClick={this.props.displayCreateForm}
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
  setSelectedMemo: PropTypes.func,
  deleteMemo: PropTypes.func,
  displayEditForm: PropTypes.func,
  closeCreateForm: PropTypes.func,
  displayCreateForm: PropTypes.func,
  isVisible: PropTypes.bool,
  isCreating: PropTypes.bool,
  isChanging: PropTypes.bool,
  indexOfSelectedMemo: PropTypes.number
}
