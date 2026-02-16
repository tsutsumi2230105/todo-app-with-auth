import { useState } from "react"
import "./AddToDoForm.scss"
import { collection, addDoc, serverTimestamp } from "firebase/firestore"
import { db } from "../../../utils/firebase"
import { useAuth } from "../../../hooks/useAuth"
import { format } from "date-fns"
import { Timestamp } from "firebase/firestore"

const AddToDoForm = () => {
  const today = new Date()
  const { user } = useAuth()
  const [title, setTitle] = useState("")
  const [dueDate, setDueDate] = useState<Date>(today)
  const [priority, setPriority] = useState<"high" | "middle" | "low">("middle")

  const handleAddTodo = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!title.trim()) {
      alert("タイトルを入力してください。")
      return
    }

    if (!user) {
      alert("ログインしてください。")
      return
    }

    try {
      await addDoc(collection(db, "users", user.uid, "todos"), {
        title,
        dueDate: Timestamp.fromDate(dueDate),
        priority,
        completed: false,
        createdAt: serverTimestamp(),
      })
    } catch (error) {
      alert("Todoの追加に失敗しました。")
      return
    }

    setTitle("")
    setDueDate(today)
    setPriority("middle")
  }

  return (
    <form className="add-todo__form" onSubmit={handleAddTodo}>
      <div className="add-todo__header">
        <div className="add-todo__title">
          <h2>新しいTODOを追加</h2>
        </div>
        <div className="add-todo__sub-title">
          <h3>タスクの詳細を入力してください</h3>
        </div>
      </div>

      <div className="add-todo__main">
        <div className="add-todo__form--fields">
          <div className="add-todo__form--field">
            <label htmlFor="add-todo__form--title">タイトル</label>
            <input
              id="add-todo__form--title"
              type="text"
              placeholder="TODOを入力…"
              className="input__form"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="add-todo__form--field">
            <label htmlFor="add-todo__form--limit">期限</label>
            <input
              id="add-todo__form--limit"
              type="date"
              className="input__form"
              value={format(dueDate, "yyyy-MM-dd")}
              onChange={(e) => setDueDate(new Date(e.target.value))}
            />
          </div>
        </div>

        <div className="add-todo__form--fields">
          <div className="add-todo__form--field">
            <label htmlFor="add-todo__form--priority">優先度</label>
            <select
              id="add-todo__form--priority"
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
          <button type="submit" className="add-todo__form--button">
            + 追加
          </button>
        </div>
      </div>
    </form>
  )
}

export default AddToDoForm
