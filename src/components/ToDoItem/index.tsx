import "./ToDo.scss"
import { useId, useMemo } from "react"
import EditIcon from "./../../assets/images/edit.png"
import DeleteIcon from "./../../assets/images/delete.png"
import type { Todo, UpdateTodoInput } from "../../types/todo"
import ToDoEdit from "../ToDoEdit"
import { useAuth } from "../../hooks/useAuth"
import { db } from "../../utils/firebase"
import { doc, deleteDoc } from "firebase/firestore"

type ToDoItemProps = {
  todo: Todo
  onToggle: (id: string) => void
  isEditing: boolean
  onEdit: () => void
  onCloseEdit: () => void
  onUpdate: (id: string, data: UpdateTodoInput) => Promise<void>
}

const ToDoItem = ({
  todo,
  onToggle,
  isEditing,
  onEdit,
  onCloseEdit,
  onUpdate,
}: ToDoItemProps) => {
  const { user } = useAuth()
  const checkboxId = useId()

  const today = useMemo(() => {
    const date = new Date()
    date.setHours(0, 0, 0, 0)
    return date
  }, [])

  const dueDate = todo.dueDate.toDate()
  dueDate.setHours(0, 0, 0, 0)

  const isExpired = !todo.completed && dueDate < today

  const deleteTodo = async (todoId: string) => {
    if (!user) return
    const confirmed = window.confirm("削除してもよろしいですか？")
    if (!confirmed) return
    try {
      await deleteDoc(doc(db, "users", user.uid, "todos", todoId))
    } catch {
      alert("削除に失敗しました。")
    }
  }

  if (isEditing) {
    return (
      <ToDoEdit editTodo={todo} onClose={onCloseEdit} onUpdate={onUpdate} />
    )
  }
  return (
    <div
      className={`todo
    ${todo.completed ? "todo--checked" : ""}
    ${isExpired ? "todo--expired" : ""}
  `}
    >
      <div className="todo__content">
        <div className="todo__checkbox">
          <input
            type="checkbox"
            id={checkboxId}
            checked={todo.completed}
            onChange={() => onToggle(todo.id)}
            className="todo__check"
          />
          <label htmlFor={checkboxId} className="todo__checkbox-box">
            <span className="todo__checkbox-check">✓</span>
          </label>
        </div>

        <div className="todo__main">
          <div className="todo__title-label">
            <div className="todo__title">
              <p>{todo.title}</p>
            </div>
            {isExpired && (
              <div className="todo__label--expired">
                <p>期限切れ</p>
              </div>
            )}
          </div>

          <div className="todo__labels">
            <div className="todo__label--completed">
              <p>完了</p>
            </div>
            <div className="todo__label--progress">
              <p>進行中</p>
            </div>
            <div className={`todo__label--${todo.priority}`}>
              <p>
                優先度:
                {todo.priority === "high"
                  ? "高"
                  : todo.priority === "middle"
                    ? "中"
                    : "低"}
              </p>
            </div>
          </div>
        </div>

        <div className="todo__icons">
          <div className="todo__icon--edit">
            <button onClick={onEdit}>
              <img src={EditIcon} alt="編集" />
            </button>
          </div>
          <div className="todo__icon--delete">
            <button onClick={() => deleteTodo(todo.id)}>
              <img src={DeleteIcon} alt="削除" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToDoItem
