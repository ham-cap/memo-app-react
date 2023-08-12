import { React, useState } from 'react'
import Form from './Form.jsx'
import MemoList from './MemoList.jsx'
import { useMemos } from './useMemos.js'
import './style/MemoList.css'
import { useLogInStatus } from './LogInStatusProvider.jsx'

function MemosSection () {
  const [isVisibleForm, setIsVisibleForm] = useState(false)
  const [indexOfSelectedMemo, setIndexOfSelectedMemo] = useState(null)
  const memos = useMemos()
  const { isLoggedIn, switchLogInStatus } = useLogInStatus()

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
        <button onClick={() => switchLogInStatus()}>
          {isLoggedIn ? 'ログアウト' : 'ログイン'}
        </button>
        <MemoList memos={memos} displayForm={displayForm} />
        {isLoggedIn && (
          <button className="linkForCreateForm" onClick={displayForm}>
            +
          </button>
        )}
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
