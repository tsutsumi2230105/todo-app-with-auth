import { Route, Routes, Navigate } from "react-router-dom"
import SignUp from "./Pages/SignUp"
import Login from "./Pages/Login"
import Dashboard from "./Pages/DashBoard"
import { Toaster } from "react-hot-toast"
import ProtectedRoute from "./components/protectedRoute"
import { useAuth } from "./hooks/useAuth"

function App() {
  const { user, loading } = useAuth()
  if (loading) return null
  return (
    <>
      <Toaster position="top-right" />
      <Routes>
        <Route
          path="/"
          element={
            user ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
          }
        />
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
