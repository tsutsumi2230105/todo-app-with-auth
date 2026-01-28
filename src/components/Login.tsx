const Login = () => {
  return (
    <>
      <h1>ログイン</h1>
      <h2>アカウントにログインしてください</h2>
      <label htmlFor="email">メールアドレス</label>
      <input
        placeholder="email@example.com"
        id="email"
        name="email"
        type="email"
      ></input>
      <label htmlFor="password">パスワード</label>
      <input
        placeholder="パスワードを入力してください"
        id="password"
        name="password"
        type="password"
      ></input>
      <button type="submit">ログイン</button>
      <button type="button">アカウントをお持ちでない方はサインアップ</button>
    </>
  )
}
export default Login
