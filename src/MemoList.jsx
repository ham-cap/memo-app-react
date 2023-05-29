import React from 'react'
import FormSwitcher from './FormSwitcher.jsx'
import PropTypes from 'prop-types'
import Memo from './Memo.jsx'
import './style/MemoList.css'

export default class MemoList extends React.Component {
  render () {
    return (
      <div className="listContainer">
        <div>
          <Memo
            memos={this.props.memos}
            displayEditForm={this.props.displayEditForm}
          />
          <button
            className="linkForCreateForm"
            onClick={this.props.displayCreateForm}
          >
            +
          </button>
        </div>
        {this.props.isVisible && (
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
        )}
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
