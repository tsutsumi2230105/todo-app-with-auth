import "./AuthButton.scss"

type AuthButtonProps = {
  children: React.ReactNode
}

const AuthButton = ({ children }: AuthButtonProps) => {
  return (
    <button className="AuthButton" type="submit">
      {children}
    </button>
  )
}

export default AuthButton
