import React from 'react'
import PropTypes from 'prop-types'
import Memo from './Memo.jsx'

export default class List extends React.Component {
  render () {
    return (
      <ul>
        {this.props.memos.map((memo, index) => (
          <Memo
            key={index}
            index={index}
            displayForm={this.props.displayForm}
            memo={memo}
          />
        ))}
      </ul>
    )
  }
}
List.propTypes = {
  displayForm: PropTypes.func,
  memos: PropTypes.array
}
