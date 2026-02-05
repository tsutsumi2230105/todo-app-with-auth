import "./ToDo.scss"
import { useId, useState } from "react"
import EditIcon from "./../../assets/images/edit.png"
import DeleteIcon from "./../../assets/images/delete.png"

type Priority = "high" | "middle" | "low"

type ToDoItemProps = {
  label: string
  priority: Priority
}

const ToDoItem = ({ label, priority }: ToDoItemProps) => {
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
            className="todo__check"
          />
          <label htmlFor={checkboxId} className="todo__checkbox-box">
            <span className="todo__checkbox-check">✓</span>
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
            <div className={`todo__label--${priority}`}>
              <p>
                優先度:
                {priority === "high"
                  ? "高"
                  : priority === "middle"
                    ? "中"
                    : "低"}
              </p>
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
    </div>
  )
}

export default ToDoItem
