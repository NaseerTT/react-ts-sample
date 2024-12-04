import { useState } from 'react';
import '../styles/Login.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleLogin = () => {

    navigate("/home")
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login to continue</h2>
        
        <form>
          <div className="input-container">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
          </div>
          
          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
          </div>
          
          <a href="/forgotpassword">forgot Password ?</a>

          <div className="button-container">
            <button onClick={handleLogin} className="login-button">Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;