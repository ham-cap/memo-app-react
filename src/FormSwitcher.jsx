import React from 'react'
import PropTypes from 'prop-types'
import CreateForm from './CreateForm.jsx'
import EditForm from './EditForm.jsx'

export default class FormSwitcher extends React.Component {
  render () {
    let form
    if (this.props.isChanging) {
      form = (
        <EditForm
          editingMemoText={this.props.editingMemoText}
          onEditingMemoTextChange={this.props.onEditingMemoTextChange}
          updateMemo={this.props.updateMemo}
          closeEditForm={this.props.closeEditForm}
          selectedMemo={this.props.selectedMemo}
        />
      )
    } else if (this.props.isCreating) {
      form = (
        <CreateForm
          newMemoText={this.props.newMemoText}
          onNewMemoTextChange={this.props.onNewMemoTextChange}
          addMemo={this.props.addMemo}
          closeCreateForm={this.props.closeCreateForm}
        />
      )
    }
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
  selectedMemo: PropTypes.array
}
