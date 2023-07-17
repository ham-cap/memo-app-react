import { React, useState, useContext } from 'react'
import Form from './Form.jsx'
import MemoList from './MemoList.jsx'
import { useMemos } from './useMemos.jsx'
import { IsLoggedIn } from './App.jsx'
import './style/MemoList.css'

function MemosSection () {
  const [isVisible, setIsVisible] = useState(false)
  const [indexOfSelectedMemo, setIndexOfSelectedMemo] = useState(null)
  const memos = useMemos()
  const [isLoggedIn, setIsLoggedIn] = useContext(IsLoggedIn)

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
        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? 'ログアウト' : 'ログイン'}
        </button>
        <MemoList memos={memos} displayForm={displayForm} />
        {isLoggedIn && (
          <button className="linkForCreateForm" onClick={displayForm}>
            +
          </button>
        )}
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
