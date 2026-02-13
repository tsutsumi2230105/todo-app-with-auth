import { Navigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import { useEffect } from "react"
import { toast } from "react-hot-toast"

type Props = {
  children: React.ReactNode
}

const PrivateRoute = ({ children }: Props) => {
  const { user, loading } = useAuth()

  useEffect(() => {
    if (loading) return
    if (!user) {
      toast.error("ログインしてください", {
        id: "auth-error",
      })
    }
  }, [user, loading])

  if (loading) {
    return null
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default PrivateRoute
