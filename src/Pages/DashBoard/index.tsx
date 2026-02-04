import StatusCard from "../../components/dashboard/StatusCard/"
import ToDoItem from "../../components/ToDo/"
import LogoutIcon from "../../assets/images/logout.png"
import "./Dashboard.scss"
import { useAuth } from "../../hooks/useAuth"

const Dashboard = () => {
  const { handleLogout } = useAuth()
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
            <p>5件のタスクを表示中</p>
          </div>
          <div className="todo__items">
            <ToDoItem label="ReactRouterを学ぶ" />
            <ToDoItem label="テスト" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default Dashboard
