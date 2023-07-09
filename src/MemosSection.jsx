import { React, useState, useEffect } from 'react'
import Form from './Form.jsx'
import MemoList from './MemoList.jsx'
import './style/MemoList.css'

function MemosSection () {
  const [memos, setMemos] = useState([])
  const [isVisible, setIsVisible] = useState(false)
  const [indexOfSelectedMemo, setIndexOfSelectedMemo] = useState(null)

  useEffect(() => {
    const currentMemos = getCurrentMemos()
    setMemos(currentMemos)
  }, [])

  const getCurrentMemos = () => {
    const memosJson = localStorage.getItem('memos')
    if (memosJson === null) {
      return []
    } else {
      const memosJson = localStorage.getItem('memos')
      const memos = JSON.parse(memosJson)
      return memos
    }
  }

  const closeForm = () => {
    setIsVisible(false)
    setIndexOfSelectedMemo('')
  }

  const displayForm = (e, index = null) => {
    e.preventDefault()
    setIsVisible(true)
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
      {isVisible && (
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
