import StatusCard from "../../components/dashboard/StatusCard/"
import "./Dashboard.scss"

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="statuscards">
        <StatusCard label="総タスク数" value={5} variant="all" />
        <StatusCard label="進行中" value={3} variant="active" />
        <StatusCard label="完了済み" value={2} variant="done" />
        <StatusCard label="期限切れ" value={0} variant="expired" />
      </div>
    </div>
  )
}
export default Dashboard
