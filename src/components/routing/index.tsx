import { Navigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

type Props = {
  children: React.ReactNode
}

const PrivateRoute = ({ children }: Props) => {
  const { user } = useAuth()
  if (!user) {
    alert("ログインしてください。")
    return <Navigate to="/login" replace />
  }
  return children
}
export default PrivateRoute
