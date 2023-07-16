import { React, useState, useEffect, useContext } from 'react'
import PropTypes from 'prop-types'
import './style/Forms.css'
import { IsLoggedIn } from './App.jsx'

function Form (props) {
  const [newMemoText, setNewMemoText] = useState('')
  const isLoggedIn = useContext(IsLoggedIn)
  console.log('hoge')
  console.log(isLoggedIn)

  const handleNewMemoTextChange = (e) => {
    setNewMemoText(e.target.value)
  }

  useEffect(() => {
    if (props.indexOfSelectedMemo === null) {
      setNewMemoText('')
    } else {
      const selectedMemo = props.memos[props.indexOfSelectedMemo].join('\n')
      setNewMemoText(selectedMemo)
    }
  }, [props.indexOfSelectedMemo])

  const addMemo = (e) => {
    e.preventDefault()
    if (newMemoText === '') return
    const memos = props.memos
    const newMemo = newMemoText.split('\n')
    memos.push(newMemo)
    const json = JSON.stringify(memos, undefined, 0)
    localStorage.setItem('memos', json)
    props.closeForm()
  }

  const updateMemo = (e) => {
    e.preventDefault()
    const currentMemos = props.memos
    currentMemos.splice(props.indexOfSelectedMemo, 1, newMemoText.split('\n'))
    const json = JSON.stringify(currentMemos, undefined, 0)
    localStorage.setItem('memos', json)
    props.closeForm()
    setNewMemoText('')
  }

  const deleteMemo = (index, e) => {
    e.preventDefault()
    const currentMemos = props.memos
    currentMemos.splice(index, 1)
    const json = JSON.stringify(currentMemos, undefined, 0)
    localStorage.setItem('memos', json)
    props.closeForm()
  }

  return (
    <div>
      <p>{props.indexOfSelectedMemo !== null ? '編集' : '新規登録'}</p>
      <textarea value={newMemoText} onChange={handleNewMemoTextChange} />
      <div>
        {props.indexOfSelectedMemo !== null
          ? (
          <div>
            <button type="submit" onClick={(event) => updateMemo(event)}>
              更新
            </button>
            <button
              type="button"
              onClick={(event) => deleteMemo(props.indexOfSelectedMemo, event)}
            >
              削除
            </button>
          </div>
            )
          : (
          <button type="submit" onClick={(event) => addMemo(event)}>
            登録
          </button>
            )}
      </div>
      <button type="button" onClick={props.closeForm}>
        キャンセル
      </button>
    </div>
  )
}

Form.propTypes = {
  indexOfSelectedMemo: PropTypes.number,
  closeForm: PropTypes.func,
  memos: PropTypes.array
}

export default Form
