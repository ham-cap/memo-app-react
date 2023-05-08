import React from 'react'
import FormSwitcher from './FormSwitcher.jsx'

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
      form = (<FormSwitcher isChanging={this.state.isChanging} />)
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
