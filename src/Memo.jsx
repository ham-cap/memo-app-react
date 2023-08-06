import React from 'react'
import PropTypes from 'prop-types'

export default class Memo extends React.Component {
  render () {
    return (
      <li>
        <button
          className="existingMemo"
          onClick={(event) => this.props.displayForm(event, this.props.index)}
        >
          {this.props.memo[0]}
        </button>
      </li>
    )
  }
}
Memo.propTypes = {
  index: PropTypes.number,
  displayForm: PropTypes.func,
  memo: PropTypes.array
}
