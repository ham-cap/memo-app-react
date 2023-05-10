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
        {memo}
      </li>
    ))

    let form
    if (this.state.isVisible) {
      form = (<FormSwitcher isChanging={this.state.isChanging} onNewMemoTextChange={this.props.onNewMemoTextChange} />)
    }
    return (
       <div>
          {form}
          <ul>
            {memoList}
          </ul>
        </div>
    )
  }
}

MemoList.propTypes = {
  memos: PropTypes.array,
  onNewMemoTextChange: PropTypes.func
}