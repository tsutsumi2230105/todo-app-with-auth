import { Route, Routes } from "react-router-dom"
import SignUp from "./Pages/SignUp/SignUp"
import Login from "./Pages/Login/Login"
import DashBoard from "./Pages/DashBoard/DashBoard"

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<DashBoard />} />
      </Routes>
    </>
  )
}

export default App
