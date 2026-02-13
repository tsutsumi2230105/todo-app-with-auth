import { Route, Routes } from "react-router-dom"
import SignUp from "./Pages/SignUp"
import Login from "./Pages/Login"
import Dashboard from "./Pages/DashBoard"
import { Toaster } from "react-hot-toast"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
