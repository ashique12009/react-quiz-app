import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import QuizDashboard from "./pages/QuizDashboard";
import ProtectedRoutes from "./routes/ProtectedRoutes";
import Notfound from "./pages/Notfound";
import QuizPage from "./pages/QuizPage";

function App() {
  return (
    <>
      <div className="main-container">
        <div className="app-container">
          <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Registration />} />

            {/* Protected route for quiz page */}
            <Route element={<ProtectedRoutes />}>
              <Route path="/quiz-dashboard" element={<QuizDashboard />} />
              <Route path="/quiz-page" element={<QuizPage />} />
            </Route>

            {/* Catch-all route for 404 Not Found */}
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
