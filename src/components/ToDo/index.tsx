import "./ToDo.scss"
import { useId, useState } from "react"
import CheckBoxBlank from "./../../assets/images/checkbox_blank.png"
import CheckBoxFilled from "./../../assets/images/checkbox_filled.png"
import EditIcon from "./../../assets/images/edit.png"
import DeleteIcon from "./../../assets/images/delete.png"

type Variant = "high" | "middle" | "low" | "completed"

type DashBoardToDoProps = {
  label?: string
  variant?: Variant
}

const ToDo = ({}: DashBoardToDoProps) => {
  const [checked, setChecked] = useState(false)
  const checkboxId = useId()

  return (
    <div className={`todo ${checked ? "todo--checked" : ""}`}>
      <div className="todo-content">
        <div className="todo-checkbox">
          <input
            type="checkbox"
            id={checkboxId}
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="todo-checkbox__input"
          />
          <label htmlFor={checkboxId} className="todo-checkbox__label">
            <img
              src={checked ? CheckBoxFilled : CheckBoxBlank}
              alt={checked ? "完了" : "未完了"}
              className="todo-checkbox__img"
            />
          </label>
        </div>

        <div className="todo-main">
          <div className="todo-title">
            <p>ReactRouterを学ぶ</p>
          </div>

          <div className="todo-label">
            <div className="todo-completed">
              <p>完了</p>
            </div>
            <div className="todo-progress">
              <p>進行中</p>
            </div>
          </div>
        </div>

        <div className="todo__icons">
          <div className="todo-edit__icon">
            <img src={EditIcon} alt="編集" />
          </div>
          <div className="todo-delete__icon">
            <img src={DeleteIcon} alt="削除" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToDo
