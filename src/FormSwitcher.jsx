import React from 'react'
import PropTypes from 'prop-types'
import CreateForm from './CreateForm.jsx'
import EditForm from './EditForm.jsx'

export default class FormSwitcher extends React.Component {
  render () {
    if (this.props.isChanging) {
      return (
        <EditForm
          editingMemoText={this.props.editingMemoText}
          onEditingMemoTextChange={this.props.onEditingMemoTextChange}
          updateMemo={this.props.updateMemo}
          closeEditForm={this.props.closeEditForm}
          indexOfSelectedMemo={this.props.indexOfSelectedMemo}
          deleteMemo={this.props.deleteMemo}
        />
      )
    } else if (this.props.isCreating) {
      return (
        <CreateForm
          memos={this.props.memos}
          closeCreateForm={this.props.closeCreateForm}
          handleMemosChange={this.props.handleMemosChange}
        />
      )
    }
  }
}

FormSwitcher.propTypes = {
  isChanging: PropTypes.bool,
  closeCreateForm: PropTypes.func,
  editingMemoText: PropTypes.string,
  onEditingMemoTextChange: PropTypes.func,
  updateMemo: PropTypes.func,
  closeEditForm: PropTypes.func,
  isCreating: PropTypes.bool,
  indexOfSelectedMemo: PropTypes.number,
  deleteMemo: PropTypes.func,
  memos: PropTypes.array,
  handleMemosChange: PropTypes.func
}
