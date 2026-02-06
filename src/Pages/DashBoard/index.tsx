import { useState } from "react"
import StatusCard from "../../components/dashboard/StatusCard/"
import ToDoItem from "../../components/ToDoItem"
import LogoutIcon from "../../assets/images/logout.png"
import "./Dashboard.scss"
import { useAuth } from "../../hooks/useAuth"
import type { Todo } from "../../types/todo"
import Filter from "../../assets/images/filter.png"

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
  const [filters, setFilters] = useState({
    status: "all",
    priority: "all",
    limit: "all",
  })

  const activeFilterCount = Object.values(filters).filter(
    (value) => value !== "all"
  ).length

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
        <div className="dashboard__view-todo">
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
          {/* ここからはフィルター */}
          <div className="dashboard-filter">
            <div className="dashboard-filter__header">
              <img src={Filter} alt="フィルターアイコン" />
              <p>フィルター</p>

              {activeFilterCount > 0 && (
                <span className="dashboard-filter__badge">
                  {activeFilterCount}
                </span>
              )}
            </div>

            <div className="dashboard-filter__main">
              <div className="dashboard-filter__status">
                <label htmlFor="status" className="dashboard-label">
                  ステータス
                </label>
                <select
                  id="status"
                  className="dashboard-filter__select"
                  value={filters.status}
                  onChange={(e) =>
                    setFilters({ ...filters, status: e.target.value })
                  }
                >
                  <option value="all">すべて</option>
                  <option value="active">進行中</option>
                  <option value="done">完了</option>
                </select>
              </div>
              <div className="dashboard-filter__priority">
                <label htmlFor="priority" className="dashboard-label">
                  優先度
                </label>
                <select
                  id="priority"
                  className="dashboard-filter__select"
                  value={filters.priority}
                  onChange={(e) =>
                    setFilters({ ...filters, priority: e.target.value })
                  }
                >
                  <option value="all">すべて</option>
                  <option value="high">高</option>
                  <option value="middle">中</option>
                  <option value="low">低</option>
                </select>
              </div>
              <div className="dashboard-filter__limit">
                <label htmlFor="limit" className="dashboard-label">
                  期限
                </label>
                <select
                  id="limit"
                  className="dashboard-filter__select"
                  value={filters.limit}
                  onChange={(e) =>
                    setFilters({ ...filters, limit: e.target.value })
                  }
                >
                  <option value="all">すべて</option>
                </select>
              </div>
              {activeFilterCount > 0 && (
                <button
                  className="dashboard-filter__button"
                  type="button"
                  onClick={() =>
                    setFilters({
                      status: "all",
                      priority: "all",
                      limit: "all",
                    })
                  }
                >
                  リセット
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dashboard
