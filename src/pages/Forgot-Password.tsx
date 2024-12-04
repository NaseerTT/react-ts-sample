import React, { useState } from 'react';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await fetch('/api/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      setMessage('Check your email for password reset instructions.');
    } catch (error) {
      setMessage('Error sending password reset email. Please try again.');
    }

    setTimeout(() => {
      setMessage("")
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Forgot Password</h2>
        
        <form>
          <div className="input-container">
            <div className='label-error'>
              <label htmlFor="email">Enter your registered email </label>
              {message && <p className="message">{message}</p>} 
            </div> 
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
              required
            />
          </div>

          <a href="/login">login instead ?</a>
          
          <div className="button-container">
            <button onClick={handleReset} className="login-button">Send Reset Link</button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;