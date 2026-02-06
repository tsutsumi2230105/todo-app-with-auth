import { useState } from "react"
import StatusCard from "../../components/dashboard/StatusCard/"
import ToDoItem from "../../components/ToDoItem"
import LogoutIcon from "../../assets/images/logout.png"
import "./Dashboard.scss"
import { useAuth } from "../../hooks/useAuth"
import type { Todo } from "../../types/todo"

const MockTodo: Todo[] = [
  {
    id: "1",
    title: "テスト1",
    completed: false,
    priority: "high",
  },
  {
    id: "2",
    title: "テスト2",
    completed: true,
    priority: "middle",
  },
  {
    id: "3",
    title: "テスト3",
    completed: false,
    priority: "low",
  },
]

const Dashboard = () => {
  const { handleLogout } = useAuth()
  const [todos, setTodos] = useState<Todo[]>(MockTodo)
  const toggleTodo = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }
  return (
    <div className="dashboard">
      <div className="dashboard__contents">
        <header className="dashboard__header">
          <h1 className="dashboard__title">TODOリスト</h1>
          <div className="dashboard__logout">
            <button onClick={handleLogout}>
              <img src={LogoutIcon} alt="ログアウトアイコン" />
              <span>ログアウト</span>
            </button>
          </div>
        </header>
        <div className="dashboard__statuscard">
          <div className="statuscards">
            <StatusCard label="総タスク数" value={5} variant="all" />
            <StatusCard label="進行中" value={3} variant="active" />
            <StatusCard label="完了済み" value={2} variant="done" />
            <StatusCard label="期限切れ" value={0} variant="expired" />
          </div>
        </div>
        <div className="dashboard__todo">
          <div className="todorest">
            <p>{todos.length}件のタスクを表示中</p>
          </div>
          <div className="todo__items">
            {todos.map((todo) => (
              <ToDoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dashboard
