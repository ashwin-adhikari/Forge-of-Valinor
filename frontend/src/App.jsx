import { Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import { useAuthContext } from "./context/AuthContext.jsx";
import "./App.css";

function App() {
    const { authUser } = useAuthContext();

    return (
        <div className="flex items-center justify-center h-screen w-screen py-4 px-4">
            <Routes>
                <Route
                    path="/"
                    element={authUser ? <Home /> : <Navigate to="/login" />}
                />
                <Route
                    path="/login"
                    element={authUser ? <Navigate to="/" /> : <Login />}
                />
                <Route
                    path="/signup"
                    element={authUser ? <Navigate to="/" /> : <Signup />}
                />
            </Routes>
            <Toaster />
        </div>
    );
}

export default App;
