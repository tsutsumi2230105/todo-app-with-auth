import "./ToDo.scss"
import { useId, useState } from "react"
import CheckBoxBlank from "./../../assets/images/checkbox_blank.png"
import CheckBoxFilled from "./../../assets/images/checkbox_filled.png"
import EditIcon from "./../../assets/images/edit.png"
import DeleteIcon from "./../../assets/images/delete.png"

type DashBoardToDoProps = {
  label: string
}

const ToDoItem = ({ label }: DashBoardToDoProps) => {
  const [checked, setChecked] = useState(false)
  const checkboxId = useId()

  return (
    <div className={`todo ${checked ? "todo--checked" : ""}`}>
      <div className="todo__content">
        <div className="todo__checkbox">
          <input
            type="checkbox"
            id={checkboxId}
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label htmlFor={checkboxId} className="todo__checkbox--label">
            <img
              src={checked ? CheckBoxFilled : CheckBoxBlank}
              alt={checked ? "完了" : "未完了"}
              className="todo__checkbox-img"
            />
          </label>
        </div>

        <div className="todo__main">
          <div className="todo__title">
            <p>{label}</p>
          </div>

          <div className="todo__labels">
            <div className="todo__label--completed">
              <p>完了</p>
            </div>
            <div className="todo__label--progress">
              <p>進行中</p>
            </div>
            {/* 優先度バッジ */}
            <div className="todo__label--high">
              <p>優先度:高</p>
            </div>
            <div className="todo__label--middle">
              <p>優先度:中</p>
            </div>
            <div className="todo__label--low">
              <p>優先度:低</p>
            </div>
          </div>
        </div>
      </div>

      <div className="todo__icons">
        <div className="todo__icon--edit">
          <img src={EditIcon} alt="編集" />
        </div>
        <div className="todo__icon--delete">
          <img src={DeleteIcon} alt="削除" />
        </div>
      </div>
    </div>
  )
}

export default ToDoItem
