import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../utils/firebase"

type UseFirebase = () => {
  loading: boolean
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  password: string
  setPassword: React.Dispatch<React.SetStateAction<string>>
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
}

export const useFirebase: UseFirebase = () => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    try {
      const userLogin = await signInWithEmailAndPassword(auth, email, password)
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
    setLoading,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
  }
}
