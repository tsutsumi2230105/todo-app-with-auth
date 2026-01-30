import AuthHeader from "../../components/auth/AuthHeader"
import AuthButton from "../../components/auth/AuthButton"
import AuthField from "../../components/auth/AuthField"
import { Link } from "react-router-dom"

import "./Login.scss"

const Login = () => {
  return (
    <div className="login">
      <div className="login__component">
        <div className="login__heading">
          <AuthHeader
            title="ログイン"
            subtitle="アカウントにログインしてください"
          />
        </div>

        <form className="login__form">
          <div className="login__main">
            <div className="login__fields">
              <AuthField
                label="メールアドレス"
                id="email"
                name="email"
                type="email"
                placeholder="email@example.com"
              />

              <AuthField
                label="パスワード"
                id="password"
                name="password"
                type="password"
                placeholder="password"
              />
            </div>

            <div className="login__action">
              <AuthButton>ログイン</AuthButton>
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
