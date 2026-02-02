import "./StatusCard.scss"

type Variant = "all" | "active" | "done" | "expired"

type DashBoardStatusCardProps = {
  label: string
  value: number
  iconSrc: string
  variant: Variant
}

const StatusCard = ({
  label,
  value,
  iconSrc,
  variant,
}: DashBoardStatusCardProps) => {
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
