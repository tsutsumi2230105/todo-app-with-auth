import StatusCard from "../../components/dashboard/StatusCard/"
import ToDo from "../../components/ToDo/"
import "./Dashboard.scss"

const Dashboard = () => {
  return (
    <>
      <div className="dashboard">
        <div className="dashboard__contents">
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
            <div className="todos">
              <ToDo label="ReactRouterを学ぶ" />
              <ToDo label="テスト" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Dashboard
