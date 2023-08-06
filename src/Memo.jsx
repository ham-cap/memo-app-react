import React from 'react'
import PropTypes from 'prop-types'

function Memo (props) {
  return (
    <li>
      <button
        className="existingMemo"
        onClick={(event) => props.displayForm(event, props.index)}
      >
        {props.memo[0]}
      </button>
    </li>
  )
}
Memo.propTypes = {
  index: PropTypes.number,
  displayForm: PropTypes.func,
  memo: PropTypes.array
}

export default Memo
