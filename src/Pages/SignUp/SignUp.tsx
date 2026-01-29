import AuthHeader from "../../components/auth/AuthHeader"
import AuthButton from "../../components/auth/AuthButton"
import { Link } from "react-router-dom"
import "./SignUp.scss"

const SignUp = () => {
  return (
    <div className="signup">
      <div className="signup__component">
        <div className="signup__heading">
          <AuthHeader
            title="サインアップ"
            subtitle="新しいアカウントを作成してください"
          />
        </div>

        <form className="signup__form">
          <div className="signup__main">
            <div className="signup__fields">
              <div className="signup__field">
                <label className="signup__label" htmlFor="email">
                  メールアドレス
                </label>
                <input
                  className="signup__input"
                  placeholder="email@example.com"
                  id="email"
                  name="email"
                  type="email"
                />
              </div>

              <div className="signup__field">
                <label className="signup__label" htmlFor="password">
                  パスワード
                </label>
                <input
                  className="signup__input"
                  placeholder="password"
                  id="password"
                  name="password"
                  type="password"
                ></input>
              </div>

              <div className="signup__field">
                <label className="signup__label" htmlFor="password__confirm">
                  パスワード確認
                </label>
                <input
                  className="signup__input"
                  placeholder="password"
                  id="password__confirm"
                  name="password__confirm"
                  type="password"
                ></input>
              </div>
            </div>

            <div className="signup__action">
              <AuthButton>サインアップ</AuthButton>
              <p>
                すでにアカウントをお持ちの方は
                <Link to="/login" className="signup__link">
                  ログイン
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default SignUp
