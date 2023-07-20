import { useState, useEffect } from 'react'

export const useMemos = () => {
  const [memos, setMemos] = useState([])

  const getCurrentMemos = () => {
    const memosFromLocalStorage = localStorage.getItem('memos')
    if (memosFromLocalStorage === null) {
      return []
    } else {
      const memos = JSON.parse(memosFromLocalStorage)
      return memos
    }
  }

  useEffect(() => {
    const currentMemos = getCurrentMemos()
    setMemos(currentMemos)
  }, [])

  return memos
}
