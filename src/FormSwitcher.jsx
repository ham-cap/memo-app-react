import React from 'react'
import CreateForm from './CreateForm.jsx'
import EditForm from './EditForm.jsx'
export default class TestComponent extends React.Component {
  render () {
    let form
    if (this.props.isChanging) {
      form = <EditForm />
    } else {
      form = <CreateForm onNewMemoTextChange={this.props.onNewMemoTextChange}/>
    }
    return form
  }
}
