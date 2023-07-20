import { useState, useEffect } from 'react'

export const useMemos = () => {
  const [memos, setMemos] = useState([])

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

  useEffect(() => {
    const currentMemos = getCurrentMemos()
    setMemos(currentMemos)
  }, [])

  return memos
}
