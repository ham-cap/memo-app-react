import React from 'react'
import PropTypes from 'prop-types'
import CreateForm from './CreateForm.jsx'
import EditForm from './EditForm.jsx'

export default class FormSwitcher extends React.Component {
  render () {
    let form
    if (this.props.isChanging) {
      form = <EditForm />
    } else {
      form = <CreateForm newMemoText={this.props.newMemoText}onNewMemoTextChange={this.props.onNewMemoTextChange} addMemo={this.props.addMemo} />
    }
    return form
  }
}

FormSwitcher.propTypes = {
  isChanging: PropTypes.bool,
  onNewMemoTextChange: PropTypes.func,
  addMemo: PropTypes.func,
  newMemoText: PropTypes.string
}
