import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../utils/firebase"

type UseAuth = () => {
  loading: boolean
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  password: string
  setPassword: React.Dispatch<React.SetStateAction<string>>
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}

export const useAuth: UseAuth = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      await signInWithEmailAndPassword(auth, email, password)
      alert("ログインに成功しました。")
      navigate("/dashboard")
    } catch (error) {
      alert("ログインに失敗しました。")
    } finally {
      setLoading(false)
    }
  }

  return {
    loading,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
  }
}
