import React from 'react'
import PropTypes from 'prop-types'
import CreateForm from './CreateForm.jsx'
import EditForm from './EditForm.jsx'

export default class FormSwitcher extends React.Component {
  render () {
    const form = ((isChanging, isCreating) => {
      if (isChanging) {
        return (
          <EditForm
            editingMemoText={this.props.editingMemoText}
            onEditingMemoTextChange={this.props.onEditingMemoTextChange}
            updateMemo={this.props.updateMemo}
            closeEditForm={this.props.closeEditForm}
            selectedMemo={this.props.selectedMemo}
            indexOfSelectedMemo={this.props.indexOfSelectedMemo}
            deleteMemo={this.props.deleteMemo}
          />
        )
      } else if (isCreating) {
        return (
          <CreateForm
            memos={this.props.memos}
            closeCreateForm={this.props.closeCreateForm}
            handleMemosChange={this.props.handleMemosChange}
          />
        )
      }
    })(this.props.isChanging, this.props.isCreating)
    return form
  }
}

FormSwitcher.propTypes = {
  isChanging: PropTypes.bool,
  onNewMemoTextChange: PropTypes.func,
  addMemo: PropTypes.func,
  newMemoText: PropTypes.string,
  closeCreateForm: PropTypes.func,
  editingMemoText: PropTypes.string,
  onEditingMemoTextChange: PropTypes.func,
  updateMemo: PropTypes.func,
  closeEditForm: PropTypes.func,
  isCreating: PropTypes.bool,
  selectedMemo: PropTypes.array,
  indexOfSelectedMemo: PropTypes.number,
  deleteMemo: PropTypes.func,
  memos: PropTypes.array,
  handleMemosChange: PropTypes.func
}
