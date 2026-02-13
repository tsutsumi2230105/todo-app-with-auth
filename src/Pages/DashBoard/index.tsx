import StatusCard from "../../components/dashboard/StatusCard/"
import ToDoItem from "../../components/ToDoItem"
import LogoutIcon from "../../assets/images/logout.png"
import "./Dashboard.scss"
import { useAuth } from "../../hooks/useAuth"
import FilterPanel from "../../components/dashboard/FilterPanel"
import { useDashBoard } from "../../hooks/useDashBoard"
import AddToDoForm from "../../components/dashboard/AddToDoForm"
import { useState } from "react"
import type { Todo } from "../../types/todo"

const Dashboard = () => {
  const [editTodo, setEditTodo] = useState<Todo | null>(null)
  const { handleLogout } = useAuth()
  const {
    filteredTodos,
    filters,
    setFilters,
    activeFilterCount,
    totalCount,
    completedCount,
    uncompletedCount,
    expiredCount,
    toggleTodo,
    updateTodo,
  } = useDashBoard()

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
            <AddToDoForm />
            <div className="todorest">
              <p>{filteredTodos.length}件のタスクを表示中</p>
            </div>
            <div className="todo__items">
              {filteredTodos.map((todo) => (
                <ToDoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={toggleTodo}
                  isEditing={editTodo?.id === todo.id}
                  onEdit={() => setEditTodo(todo)}
                  onCloseEdit={() => setEditTodo(null)}
                  onUpdate={updateTodo}
                />
              ))}
            </div>
            {filteredTodos.length === 0 && (
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
