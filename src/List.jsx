import React from 'react'
import PropTypes from 'prop-types'

export default class List extends React.Component {
  render () {
    return (
      <ul>
        {this.props.memos.map((memo, index) => (
          <li key={index}>
            <button
              className="existingMemo"
              onClick={(event) => this.props.displayForm(event, index)}
            >
              {memo[0]}
            </button>
          </li>
        ))}
      </ul>
    )
  }
}
List.propTypes = {
  displayForm: PropTypes.func,
  memos: PropTypes.array
}
