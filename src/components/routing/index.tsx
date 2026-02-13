import { Navigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { useEffect } from "react"
import { toast } from "react-hot-toast"

type Props = {
  children: React.ReactNode
}

const PrivateRoute = ({ children }: Props) => {
  const { user } = useAuth()

  useEffect(() => {
    if (!user) {
      toast.error("ログインしてください", {
        id: "auth-error",
      })
    }
  }, [user])

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default PrivateRoute
