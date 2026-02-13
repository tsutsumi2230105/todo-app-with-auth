import { Route, Routes } from "react-router-dom"
import SignUp from "./Pages/SignUp"
import Login from "./Pages/Login"
import Dashboard from "./Pages/DashBoard"
import { Toaster } from "react-hot-toast"
import PrivateRoute from "./components/protectedRoute"

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
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
