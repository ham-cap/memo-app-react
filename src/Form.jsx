import React from 'react'
import PropTypes from 'prop-types'
import './style/Forms.css'

export default class Form extends React.Component {
  render () {
    return (
      <div>
        <p>{this.props.indexOfSelectedMemo !== null ? '編集' : '新規登録'}</p>
        <textarea id="inputForm" value={this.props.selectedMemo} />
        <div>
          {this.props.indexOfSelectedMemo !== null
            ? (
            <div>
              <button
                type="submit"
                onClick={(event) =>
                  this.props.updateMemo(
                    event,
                    this.props.indexOfSelectedMemo,
                    document.getElementById('inputForm').value
                  )
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
            <button
              type="submit"
              onClick={(event) =>
                this.props.addMemo(
                  event,
                  document.getElementById('inputForm').value
                )
              }
            >
              登録
            </button>
              )}
        </div>
        <button type="button" onClick={this.props.closeForm}>
          キャンセル
        </button>
      </div>
    )
  }
}
Form.propTypes = {
  addMemo: PropTypes.func,
  indexOfSelectedMemo: PropTypes.number,
  updateMemo: PropTypes.func,
  deleteMemo: PropTypes.func,
  closeForm: PropTypes.func,
  selectedMemo: PropTypes.string
}
