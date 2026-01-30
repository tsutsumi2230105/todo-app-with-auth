import "./AuthHeader.scss"

type AuthHeaderProps = {
  title: string
  subtitle?: string
}

const AuthHeader = ({ title, subtitle }: AuthHeaderProps) => {
  return (
    <div className="AuthHeader">
      <h1 className="AuthHeader__title">{title}</h1>
      <h2 className="AuthHeader__subtitle">{subtitle}</h2>
    </div>
  )
}

export default AuthHeader
