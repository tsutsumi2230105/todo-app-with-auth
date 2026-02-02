import AuthHeader from "../../components/auth/AuthHeader"
import SubmitButton from "../../components/auth/SubmitButton"
import AuthField from "../../components/auth/AuthField"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

import "./Login.scss"

const Login = () => {
  const { loading, email, setEmail, password, setPassword, handleLogin } =
    useAuth()

  return (
    <div className="login">
      <div className="login__component">
        <div className="login__heading">
          <AuthHeader
            title="ログイン"
            subtitle="アカウントにログインしてください"
          />
        </div>

        <form className="login__form" onSubmit={handleLogin}>
          <div className="login__main">
            <div className="login__fields">
              <AuthField
                label="メールアドレス"
                id="email"
                name="email"
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
              <AuthField
                label="パスワード"
                id="password"
                name="password"
                type="password"
                placeholder="password"
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
            </div>

            <div className="login__action">
              <SubmitButton isLoading={loading} loadingText="ログイン中‥">
                ログイン
              </SubmitButton>
              <p>
                アカウントをお持ちでない方は
                <Link to="/signup" className="login__link">
                  サインアップ
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default Login
