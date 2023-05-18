import React from 'react'
import PropTypes from 'prop-types'
import './style/EditForm.css'

export default class EditForm extends React.Component {
  constructor (props) {
    super(props)
    this.handleEditingMemoTextChange =
      this.handleEditingMemoTextChange.bind(this)
  }

  handleEditingMemoTextChange (e) {
    this.props.onEditingMemoTextChange(e.target.value)
  }

  render () {
    return (
      <div>
        <p>EditForm</p>
        <textarea
          className="textareaInEditForm"
          type="text"
          value={this.props.editingMemoText}
          onChange={this.handleEditingMemoTextChange}
        />
        <button
          type="submit"
          onClick={() =>
            this.props.updateMemo(this.props.indexOfSelectedMemo, event)
          }
        >
          更新
        </button>
        <button
          type="button"
          onClick={() =>
            this.props.deleteMemo(this.props.indexOfSelectedMemo, event)
          }
        >
          削除
        </button>
        <button type="button" onClick={this.props.closeEditForm}>
          キャンセル
        </button>
      </div>
    )
  }
}

EditForm.propTypes = {
  onEditingMemoTextChange: PropTypes.func,
  editingMemoText: PropTypes.string,
  updateMemo: PropTypes.func,
  closeEditForm: PropTypes.func,
  indexOfSelectedMemo: PropTypes.number,
  deleteMemo: PropTypes.func
}
