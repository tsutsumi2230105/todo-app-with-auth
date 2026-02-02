import "./DashBoard.scss"
import StatusCard from "../../components/dashboard/StatusCard"
import AllTaskLogo from "../../assets/images/all_task_logo.png"
import ActiveTaskLogo from "../../assets/images/active_task_logo.png"
import CompletedLogo from "../../assets/images/completed_task_logo.png"
import ExpiredLogo from "../../assets/images/expired_task_logo.png"

const DashBoard = () => {
  return (
    <div className="dashboard">
      <div className="statuscards">
        <StatusCard
          label="総タスク数"
          value={5}
          iconSrc={AllTaskLogo}
          variant="all"
        />
        <StatusCard
          label="進行中"
          value={3}
          iconSrc={ActiveTaskLogo}
          variant="active"
        />
        <StatusCard
          label="完了済み"
          value={2}
          iconSrc={CompletedLogo}
          variant="done"
        />
        <StatusCard
          label="期限切れ"
          value={0}
          iconSrc={ExpiredLogo}
          variant="expired"
        />
      </div>
    </div>
  )
}
export default DashBoard
