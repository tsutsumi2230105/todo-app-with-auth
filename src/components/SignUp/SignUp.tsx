import "./SignUp.scss"

const SignUp = () => {
  return (
    <div className="signup__page">
      <div className="signup__component">
        <div className="signup__heading">
          <h1 className="signup__title">サインアップ</h1>
          <h2 className="signup__subtitle">
            新しいアカウントを作成してください
          </h2>
        </div>

        <form className="signup__form">
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
            ></input>
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
        </form>

        <div className="signup__action">
          <button className="signup__button" type="submit">
            サインアップ
          </button>
          <p>
            すでにアカウントをお持ちの方は
            <a className="signup__link" href="/SignUp">
              ログイン
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
export default SignUp
