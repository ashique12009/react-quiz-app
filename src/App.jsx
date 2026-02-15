import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
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
            <Route path="/quiz" element={<QuizPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
