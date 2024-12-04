import { useState } from 'react';
import '../styles/Login.css';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');

  const handleSignup = () => {
    setEmail('');
    setPassword('');
    setRepassword('');
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Signup</h2>
        
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


          <div className="input-container">
            <label htmlFor="repassword">Re-enter Password:</label>
            <input
              type="password"
              id="repassword"
              value={repassword}
              onChange={(e) => setRepassword(e.target.value)}
              className="input-field"
              required
            />
          </div>
          
          <a href="/login">Have existing account ?</a>

          <div className="button-container">
            <button onClick={handleSignup} className="login-button">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;