import "./StatusCard.scss"
import AllTaskLogo from "../../../assets/images/all_task_logo.png"
import ActiveTaskLogo from "../../../assets/images/active_task_logo.png"
import CompletedLogo from "../../../assets/images/completed_task_logo.png"
import ExpiredLogo from "../../../assets/images/expired_task_logo.png"

type Variant = "all" | "active" | "done" | "expired"

type DashBoardStatusCardProps = {
  label: string
  value: number
  variant: Variant
}

const IconMap: Record<Variant, string> = {
  all: AllTaskLogo,
  active: ActiveTaskLogo,
  done: CompletedLogo,
  expired: ExpiredLogo,
}

const StatusCard = ({ label, value, variant }: DashBoardStatusCardProps) => {
  const iconSrc = IconMap[variant]
  return (
    <div className="statuscard">
      <div className="statuscard__content">
        <div className="statuscard__text">
          <p className="statuscard__label">{label}</p>
          <p className="statuscard__value">{value}</p>
        </div>
        <div className={`statuscard__icon-bg statuscard__icon-bg--${variant}`}>
          <img src={iconSrc} alt="ステータスアイコン" />
        </div>
      </div>
    </div>
  )
}

export default StatusCard
