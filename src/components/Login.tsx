import "./Login.scss"

const Login = () => {
  return (
    <div className="login__page">
      <div className="login__component">
        <div className="login__heading">
          <h1 className="login__title">ログイン</h1>
          <h2 className="login__subtitle">アカウントにログインしてください</h2>
        </div>

        <form className="login__form">
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
        </form>

        <div className="login__action">
          <button className="login__button" type="submit">
            ログイン
          </button>
          <p>
            アカウントをお持ちでない方は
            <a className="login__link" href="/signup">
              サインアップ
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
export default Login
