import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth"
import { auth } from "../utils/firebase"
import { FirebaseError } from "firebase/app"
import type { User } from "firebase/auth"

type UseAuth = () => {
  user: User | null
  loading: boolean
  email: string
  setEmail: React.Dispatch<React.SetStateAction<string>>
  password: string
  setPassword: React.Dispatch<React.SetStateAction<string>>
  handleLogin: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  passwordConf: string
  setPasswordConf: React.Dispatch<React.SetStateAction<string>>
  handleSignup: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
  handleLogout: () => Promise<void>
}

export const useAuth: UseAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConf, setPasswordConf] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

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

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== passwordConf) {
      alert("パスワードが一致しません。")
      return
    } else if (password.length < 8) {
      alert("パスワードは8文字以上で入力してください。")
      return
    }
    try {
      setLoading(true)
      await createUserWithEmailAndPassword(auth, email, password)
      alert("アカウントを作成しました。")
      navigate("/dashboard")
    } catch (error) {
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/email-already-in-use":
            alert("このメールアドレスはすでに使われています。")
            break
          case "auth/invalid-email":
            alert("メールアドレスの形式が正しくありません。")
            break
          default:
            alert("アカウントの作成に失敗しました。")
        }
      } else {
        alert("予期しないエラーが発生しました。")
      }
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = async () => {
    setLoading(true)
    try {
      await auth.signOut()
      alert("ログアウトしました。")
      navigate("/login")
    } catch (error) {
      alert("ログアウトに失敗しました。")
    } finally {
      setLoading(false)
    }
  }

  return {
    user,
    loading,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    passwordConf,
    setPasswordConf,
    handleSignup,
    handleLogout,
  }
}
