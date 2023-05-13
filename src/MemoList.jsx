import React from 'react'
import FormSwitcher from './FormSwitcher.jsx'
import PropTypes from 'prop-types'

export default class MemoList extends React.Component {
  constructor (props) {
    super(props)
    this.state = { isChanging: false, isVisible: true }
  }

  render () {
    const memos = this.props.memos
    const memoList = memos.map((memo, index) => (
      <li key={index}>
        {index}
        <a href="">{memo[0]}</a>
      </li>
    ))

    let form
    if (this.state.isVisible) {
      form = (
        <FormSwitcher
          newMemoText={this.props.newMemoText}
          isChanging={this.state.isChanging}
          onNewMemoTextChange={this.props.onNewMemoTextChange}
          addMemo={this.props.addMemo}
        />
      )
    }
    return (
      <div>
        {form}
        <ul>{memoList}</ul>
        <a href="">+</a>
      </div>
    )
  }
}

MemoList.propTypes = {
  memos: PropTypes.array,
  onNewMemoTextChange: PropTypes.func,
  addMemo: PropTypes.func,
  newMemoText: PropTypes.string
}
