import AuthHeader from "../../components/auth/AuthHeader"
import SubmitButton from "../../components/auth/SubmitButton"
import AuthField from "../../components/auth/AuthField"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import "./SignUp.scss"

const SignUp = () => {
  const {
    loading,
    email,
    setEmail,
    password,
    setPassword,
    passwordConf,
    setPasswordConf,
    handleSignup,
  } = useAuth()

  return (
    <div className="signup">
      <div className="signup__component">
        <div className="signup__heading">
          <AuthHeader
            title="サインアップ"
            subtitle="新しいアカウントを作成してください"
          />
        </div>

        <form className="signup__form" onSubmit={handleSignup}>
          <div className="signup__main">
            <div className="signup__fields">
              <AuthField
                label="メールアドレス"
                id="email"
                name="email"
                type="email"
                placeholder="email@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <AuthField
                label="パスワード"
                id="password"
                name="password"
                type="password"
                placeholder="password (8文字以上)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <AuthField
                label="パスワード確認"
                id="password_confirm"
                name="password_confirm"
                type="password"
                placeholder="password (8文字以上)"
                value={passwordConf}
                onChange={(e) => setPasswordConf(e.target.value)}
              />
            </div>

            <div className="signup__action">
              <SubmitButton isLoading={loading} loadingText="サインアップ中‥">
                サインアップ
              </SubmitButton>
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
