import { useState } from "react"
import "./ToDoEdit.scss"
import type { Todo, UpdateTodoInput } from "../../types/todo"

type ToDoEditProps = {
  editTodo: Todo | null
  onClose: () => void
  onUpdate: (id: string, data: UpdateTodoInput) => Promise<void>
}

const ToDoEdit = ({ editTodo, onClose, onUpdate }: ToDoEditProps) => {
  if (!editTodo) return null
  const [title, setTitle] = useState(editTodo.title)
  const [dueDate, setDueDate] = useState(editTodo.dueDate)
  const [priority, setPriority] = useState<"high" | "middle" | "low">("middle")

  const handleSave = async () => {
    if (!editTodo) return

    await onUpdate(editTodo.id, {
      title,
      dueDate,
      priority,
    })

    onClose()
  }

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
            <button
              className="edit-todo__button edit-todo__button--save"
              onClick={handleSave}
            >
              保存
            </button>

            <button
              className="edit-todo__button edit-todo__button--cancel"
              type="button"
              onClick={onClose}
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
