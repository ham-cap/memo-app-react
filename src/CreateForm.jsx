import React from 'react'
import PropTypes from 'prop-types'
export default class CreateForm extends React.Component {
  constructor (props) {
    super(props)
    this.handleNewMemoTextChange = this.handleNewMemoTextChange.bind(this)
  }

  handleNewMemoTextChange (e) {
    this.props.onNewMemoTextChange(e.target.value)
  }

  render () {
    return (
      <div>
        <p>CreateForm</p>
        <input
          type="text"
          value={this.props.newMemoText}
          onChange={this.handleNewMemoTextChange}
        />
        <button>登録</button>
      </div>
    )
  }
}

CreateForm.propTypes = {
  onNewMemoTextChange: PropTypes.func,
  newMemoText: PropTypes.string
}