import React from 'react'
import PropTypes from 'prop-types'
import Memo from './Memo.jsx'

function MemoList(props) {
  return (
    <ul>
      {props.memos.map((memo, index) => (
        <Memo
          key={index}
          index={index}
          displayForm={props.displayForm}
          memo={memo}
        />
      ))}
    </ul>
  )
}
MemoList.propTypes = {
  displayForm: PropTypes.func,
  memos: PropTypes.array,
}

export default MemoList
