import "./AuthHeader.scss"

type AuthHeaderProps = {
  title: string
  subtitle?: string
}

const AuthHeader = ({ title, subtitle }: AuthHeaderProps) => {
  return (
    <div className="auth-header">
      <h1 className="auth-header__title">{title}</h1>
      <h2 className="auth-header__subtitle">{subtitle}</h2>
    </div>
  )
}

export default AuthHeader
