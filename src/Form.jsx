import React from 'react'
import PropTypes from 'prop-types'
import './style/Forms.css'

export default class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newMemoText: ''
    }
    this.addMemo = this.addMemo.bind(this)
    // this.updateMemo = this.updateMemo.bind(this)
    this.handleNewMemoTextChange = this.handleNewMemoTextChange.bind(this)
  }

  handleNewMemoTextChange (e) {
    this.setState({ newMemoText: e.target.value })
  }

  componentDidMount () {
    if (this.props.indexOfSelectedMemo !== null) {
      const selectedMemo =
        this.props.memos[this.props.indexOfSelectedMemo].join('\n')
      this.setState({ newMemoText: selectedMemo })
    } else {
      this.setState({ newMemoText: '' })
    }
  }

  addMemo (e) {
    e.preventDefault()
    if (this.state.newMemoText === '') return
    const memos = this.props.memos
    const newMemo = this.state.newMemoText.split('\n')
    memos.push(newMemo)
    const json = JSON.stringify(memos, undefined, 0)
    localStorage.setItem('memos', json)
    this.props.closeForm()
  }

  updateMemo (e) {
    e.preventDefault()
    const currentMemos = this.props.memos
    currentMemos.splice(
      this.props.indexOfSelectedMemo,
      1,
      this.state.newMemoText.split('\n')
    )
    const json = JSON.stringify(currentMemos, undefined, 0)
    localStorage.setItem('memos', json)
    this.props.closeForm()
    this.setState({ newMemoText: '' })
  }

  render () {
    return (
      <div>
        <p>{this.props.indexOfSelectedMemo !== null ? '編集' : '新規登録'}</p>
        <textarea
          value={this.state.newMemoText}
          onChange={this.handleNewMemoTextChange}
        />
        <div>
          {this.props.indexOfSelectedMemo !== null
            ? (
            <div>
              <button type="submit" onClick={(event) => this.updateMemo(event)}>
                更新
              </button>
              <button
                type="button"
                onClick={(event) =>
                  this.props.deleteMemo(this.props.indexOfSelectedMemo, event)
                }
              >
                削除
              </button>
            </div>
              )
            : (
            <button type="submit" onClick={(event) => this.addMemo(event)}>
              登録
            </button>
              )}
        </div>
        <button type="button" onClick={this.props.closeForm}>
          キャンセル
        </button>
      </div>
    )
  }
}
Form.propTypes = {
  addMemo: PropTypes.func,
  indexOfSelectedMemo: PropTypes.number,
  updateMemo: PropTypes.func,
  deleteMemo: PropTypes.func,
  closeForm: PropTypes.func,
  selectedMemo: PropTypes.string,
  memos: PropTypes.array
}
