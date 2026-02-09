import { useState } from "react"
import type { Todo } from "../../types/todo"
import "./ToDoEdit.scss"

type editToDoFormProps = {
  oneditTodo?: (todo: Todo) => void
}

const ToDoEdit = ({}: editToDoFormProps) => {
  const [title, setTitle] = useState("")
  const [dueDate, setDueDate] = useState("")
  const [priority, setPriority] = useState<"high" | "middle" | "low">("middle")

  return (
    <div className="edit-todo__form">
      <div className="edit-todo__main">
        <div className="edit-todo__form--fields">
          <div className="edit-todo__form--field">
            <label htmlFor="edit-todo__form--title">タイトル</label>
            <input
              id="edit-todo__form--title"
              type="text"
              placeholder="TODOを入力…"
              className="input__form"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="edit-todo__form--field">
            <label htmlFor="edit-todo__form--limit">期限</label>
            <input
              id="edit-todo__form--limit"
              type="date"
              className="input__form"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
            />
          </div>
        </div>

        <div className="edit-todo__form--fields">
          <div className="edit-todo__form--field">
            <label htmlFor="edit-todo__form--priority">優先度</label>
            <select
              id="edit-todo__form--priority"
              className="input__form"
              value={priority}
              onChange={(e) =>
                setPriority(e.target.value as "high" | "middle" | "low")
              }
            >
              <option value="high">高</option>
              <option value="middle">中</option>
              <option value="low">低</option>
            </select>
          </div>
          <div className="edit-todo__actions">
            <button className="edit-todo__button edit-todo__button--save">
              保存
            </button>

            <button
              className="edit-todo__button edit-todo__button--cancel"
              type="button"
            >
              キャンセル
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToDoEdit
