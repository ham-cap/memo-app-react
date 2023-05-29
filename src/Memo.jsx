import React from 'react'
import PropTypes from 'prop-types'

export default class Memo extends React.Component {
  render () {
    return (
      <ul>
        {this.props.memos.map((memo, index) => (
          <li key={index}>
            <button
              className="existingMemo"
              onClick={() => this.props.displayEditForm(index, event)}
            >
              {memo[0]}
            </button>
          </li>
        ))}
      </ul>
    )
  }
}
Memo.propTypes = {
  displayEditForm: PropTypes.func,
  memos: PropTypes.array
}
