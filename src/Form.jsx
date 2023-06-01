import React from 'react'
import PropTypes from 'prop-types'
import './style/Forms.css'

export default class Form extends React.Component {
  render () {
    return (
      <div>
        {this.props.indexOfSelectedMemo ? <p>編集</p> : <p>新規登録</p>}
        <textarea
          value={this.props.newMemoText}
          onChange={this.props.handleNewMemoTextChange}
        />
        {this.props.indexOfSelectedMemo
          ? (
          <div>
            <button
              type="submit"
              onClick={(event) =>
                this.props.updateMemo(this.props.indexOfSelectedMemo, event)
              }
            >
              更新
            </button>
            <button
              type="button"
              onClick={(event) =>
                this.props.deleteMemo(this.props.indexOfSelectedMemo, event)
              }
            >
              削除
            </button>
          </div>
            )
          : (
          <div>
            <button
              type="submit"
              onClick={(event) => this.props.addMemo(event)}
            >
              登録
            </button>
          </div>
            )}
        <button type="button" onClick={this.props.closeForm}>
          キャンセル
        </button>
      </div>
    )
  }
}
Form.propTypes = {
  newMemoText: PropTypes.string,
  addMemo: PropTypes.func,
  handleNewMemoTextChange: PropTypes.func,
  indexOfSelectedMemo: PropTypes.number,
  updateMemo: PropTypes.func,
  deleteMemo: PropTypes.func,
  closeForm: PropTypes.func
}
