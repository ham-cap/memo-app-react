import React from 'react'
import PropTypes from 'prop-types'
import './style/Forms.css'

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
        <p>新規登録</p>
        <textarea
          type="text"
          value={this.props.newMemoText}
          onChange={this.handleNewMemoTextChange}
        />
        <div>
          <button type="submit" onClick={this.props.addMemo}>
            登録
          </button>
          <button type="button" onClick={this.props.closeCreateForm}>
            キャンセル
          </button>
        </div>
      </div>
    )
  }
}

CreateForm.propTypes = {
  onNewMemoTextChange: PropTypes.func,
  newMemoText: PropTypes.string,
  addMemo: PropTypes.func,
  closeCreateForm: PropTypes.func
}
