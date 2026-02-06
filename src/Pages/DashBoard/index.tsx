import { useState } from "react"
import StatusCard from "../../components/dashboard/StatusCard/"
import ToDoItem from "../../components/ToDoItem"
import LogoutIcon from "../../assets/images/logout.png"
import "./Dashboard.scss"
import { useAuth } from "../../hooks/useAuth"
import type { Todo } from "../../types/todo"
import FilterPanel from "../../components/dashboard/FilterPanel"
import type { Filters } from "../../types/filter"

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
  const [filters, setFilters] = useState<Filters>({
    status: "all",
    priority: "all",
    limit: "all",
  })

  const activeFilterCount = Object.values(filters).filter(
    (value) => value !== "all"
  ).length

  const filterTodos = todos.filter((todo) => {
    if (filters.status === "uncompleted" && todo.completed) return false
    if (filters.status === "completed" && !todo.completed) return false
    if (filters.priority !== "all" && todo.priority !== filters.priority)
      return false
    return true
  })
  const totalCount = todos.length
  const uncompletedCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.filter((todo) => todo.completed).length
  const expiredCount = 0

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
            <StatusCard label="総タスク数" value={totalCount} variant="all" />
            <StatusCard
              label="進行中"
              value={uncompletedCount}
              variant="uncompleted"
            />
            <StatusCard
              label="完了済み"
              value={completedCount}
              variant="completed"
            />
            <StatusCard
              label="期限切れ"
              value={expiredCount}
              variant="expired"
            />
          </div>
        </div>
        <div className="dashboard__view-todo">
          <div className="dashboard__todo">
            <div className="todorest">
              <p>{filterTodos.length}件のタスクを表示中</p>
            </div>
            <div className="todo__items">
              {filterTodos.map((todo) => (
                <ToDoItem key={todo.id} todo={todo} onToggle={toggleTodo} />
              ))}
            </div>
            {filterTodos.length === 0 && (
              <div className="todo__no-items">
                <p>フィルター条件に一致するTODOがありません。</p>
              </div>
            )}
          </div>
          <FilterPanel
            filters={filters}
            activeFilterCount={activeFilterCount}
            setFilters={setFilters}
          />
        </div>
      </div>
    </div>
  )
}
export default Dashboard
