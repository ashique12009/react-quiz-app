function App() {
  return (
    <>
      <div className="main-container">
        <div className="app-container">
          <h1 className="text-center">Quiz App - Login</h1>
          <form className="login-form">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" id="username" name="username" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" id="password" name="password" required />
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
