import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function LogOut() {
  localStorage.clear();
  return <Navigate to={"/login"} />
}

function RegisterAndLogOut() {
  localStorage.clear()
    return <Register/>
}
function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterAndLogOut />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
