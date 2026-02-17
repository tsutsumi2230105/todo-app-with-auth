import { useState } from "react"
import "./ToDoEdit.scss"
import type { Todo, UpdateTodoInput } from "../../types/todo"
import { format } from "date-fns"
type ToDoEditProps = {
  editTodo: Todo | null
  onClose: () => void
  onUpdate: (id: string, data: UpdateTodoInput) => Promise<void>
}
import dropdown from "../../assets/images/dropdown.png"

const ToDoEdit = ({ editTodo, onClose, onUpdate }: ToDoEditProps) => {
  if (!editTodo) return null
  const [title, setTitle] = useState(editTodo.title)
  const [dueDate, setDueDate] = useState<Date | null>(
    editTodo.dueDate ? editTodo.dueDate.toDate() : null
  )
  const [priority, setPriority] = useState<"high" | "middle" | "low">(
    editTodo.priority
  )

  const handleSave = async () => {
    if (!editTodo) return
    if (!title.trim()) {
      alert("タイトルを入力してください。")
      return
    }
    try {
      await onUpdate(editTodo.id, {
        title,
        dueDate,
        priority,
      })
      onClose()
    } catch (error) {
      alert("ToDoの更新に失敗しました。")
    }
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
              value={dueDate ? format(dueDate, "yyyy-MM-dd") : ""}
              onChange={(e) => {
                if (!e.target.value) {
                  setDueDate(null)
                } else {
                  setDueDate(new Date(e.target.value))
                }
              }}
            />
          </div>
        </div>

        <div className="edit-todo__form--fields">
          <div className="edit-todo__form--field">
            <label htmlFor="edit-todo__form--priority">優先度</label>
            <select
              style={{ backgroundImage: `url(${dropdown})` }}
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
