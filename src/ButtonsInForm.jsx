import { React } from 'react'
import PropTypes from 'prop-types'

function ButtonsInForm(props) {
  return (
    <div>
      {props.indexOfSelectedMemo !== null ? (
        <div>
          <button type="submit" onClick={(event) => props.updateMemo(event)}>
            更新
          </button>
          <button
            type="button"
            onClick={(event) =>
              props.deleteMemo(props.indexOfSelectedMemo, event)
            }
          >
            削除
          </button>
        </div>
      ) : (
        <button type="submit" onClick={(event) => props.addMemo(event)}>
          登録
        </button>
      )}
    </div>
  )
}

ButtonsInForm.propTypes = {
  indexOfSelectedMemo: PropTypes.number,
  updateMemo: PropTypes.func,
  deleteMemo: PropTypes.func,
  addMemo: PropTypes.func,
}

export default ButtonsInForm
