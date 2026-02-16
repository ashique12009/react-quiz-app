import { Link, Navigate, useNavigate } from "react-router-dom";
import useUser from "../hooks/userHooks";
import { hashPassword } from "../utils/hash";
import { setAuthUser } from "../auth/auth";
import { isAuthenticated } from "../auth/auth";

const Login = () => {
  const { fetchUserByEmail } = useUser();
  const navigate = useNavigate();

  if (isAuthenticated()) {
    return <Navigate to="/quiz-dashboard" replace />;
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    // Collect email and password from the form
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    const hashedPassword = hashPassword(password);

    // You can add your authentication logic here (e.g., call an API, set user state, etc.)
    const user = await fetchUserByEmail(email);

    if (user && user.password === hashedPassword) {
      // Store user information in localStorage
      setAuthUser(user);
      navigate("/quiz-dashboard", { replace: true });
    } else {
      alert("Invalid email or password.");
    }
  };

  return (
    <div>
      <h1 className="text-center">Quiz App - Login</h1>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
        <div className="additional-links">
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
          <Link to="/register" className="register-link">
            Don't have an account? Register
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
