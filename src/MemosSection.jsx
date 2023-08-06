import { React, useState } from 'react'
import Form from './Form.jsx'
import MemoList from './MemoList.jsx'
import { useMemos } from './useMemos.js'
import './style/MemoList.css'

function MemosSection () {
  const [isVisibleForm, setIsVisibleForm] = useState(false)
  const [indexOfSelectedMemo, setIndexOfSelectedMemo] = useState(null)
  const memos = useMemos()

  const closeForm = () => {
    setIsVisibleForm(false)
    setIndexOfSelectedMemo('')
  }

  const displayForm = (e, index = null) => {
    e.preventDefault()
    setIsVisibleForm(true)
    setIndexOfSelectedMemo(index)
  }

  return (
    <div className="listContainer">
      <div>
        <MemoList memos={memos} displayForm={displayForm} />
        <button className="linkForCreateForm" onClick={displayForm}>
          +
        </button>
      </div>
      {isVisibleForm && (
        <Form
          memos={memos}
          indexOfSelectedMemo={indexOfSelectedMemo}
          closeForm={closeForm}
        />
      )}
    </div>
  )
}
export default MemosSection
