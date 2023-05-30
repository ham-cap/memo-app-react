import React from 'react'
import PropTypes from 'prop-types'
import './style/Forms.css'

export default class CreateForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newMemoText: ''
    }
    this.handleNewMemoTextChange = this.handleNewMemoTextChange.bind(this)
    this.addMemo = this.addMemo.bind(this)
  }

  handleNewMemoTextChange (e) {
    this.setState({ newMemoText: e.target.value })
  }

  handleMemosChange () {
    this.props.handleMemosChange()
  }

  addMemo (e) {
    e.preventDefault()
    if (this.state.newMemoText === '') return
    const memos = this.props.memos
    const newMemo = this.state.newMemoText.split('\n')
    memos.push(newMemo)
    const json = JSON.stringify(memos, undefined, 0)
    localStorage.setItem('memos', json)
    this.setState({ newMemoText: '' })
    this.handleMemosChange()
    this.props.closeCreateForm()
  }

  render () {
    return (
      <div>
        <p>新規登録</p>
        <textarea
          type="text"
          value={this.state.newMemoText}
          onChange={this.handleNewMemoTextChange}
        />
        <div>
          <button type="submit" onClick={this.addMemo}>
            登録
          </button>
          <button type="button" onClick={this.props.closeCreateForm}>
            キャンセル
          </button>
        </div>
        <p>{this.state.newMemoText}</p>
      </div>
    )
  }
}

CreateForm.propTypes = {
  onNewMemoTextChange: PropTypes.func,
  newMemoText: PropTypes.string,
  addMemo: PropTypes.func,
  closeCreateForm: PropTypes.func,
  memos: PropTypes.array,
  handleMemosChange: PropTypes.func
}
