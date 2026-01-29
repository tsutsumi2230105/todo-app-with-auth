import { Route, Routes } from "react-router-dom"
import SignUp from "./components/SignUp/SignUp"
import Login from "./components/Login/Login"

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
