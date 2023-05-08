import React from 'react'
import MemoList from './MemoList.jsx'
// import FormSwitcher from './FormSwitcher.jsx'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { newMemo: 'hogefugapuni' }
  }

  render () {
    const memos = ['hoge', 'fuga', 'puni']
    return (
      <div>
        <MemoList memos={memos} />
      </div>
    )
  }
}

export default App
