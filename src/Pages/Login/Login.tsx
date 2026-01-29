import AuthHeader from "../../components/auth/AuthHeader"
import AuthButton from "../../components/auth/AuthButton"
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
              <div className="login__field">
                <label className="login__label" htmlFor="email">
                  メールアドレス
                </label>
                <input
                  className="login__input"
                  placeholder="email@example.com"
                  id="email"
                  name="email"
                  type="email"
                />
              </div>

              <div className="login__field">
                <label className="login__label" htmlFor="password">
                  パスワード
                </label>
                <input
                  className="login__input"
                  placeholder="password"
                  id="password"
                  name="password"
                  type="password"
                />
              </div>
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
