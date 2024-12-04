import React, { useState } from 'react';
import '../styles/Home.css'

const Home: React.FC = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div className="home-page">
      <header className="page-header">
        <h1>Welcome to Our Home Page</h1>
        <p>Explore our features below!</p>
      </header>

      <section className="demo-section">
        <h2>Demo Features</h2>
        <div className="demo-item">
          <img src="https://picsum.photos/200" alt="Feature 1" className="feature-image" />
          <div className="feature-content">
            <h4>Real-time Analytics</h4>
            <p>Get instant insights into your data.</p>
          </div>
        </div>
        <div className="demo-item">
          <img src="https://picsum.photos/201" alt="Feature 2" className="feature-image" />
          <div className="feature-content">
            <h4>Customizable Dashboard</h4>
            <p>Create your perfect view with drag-and-drop widgets.</p>
          </div>
        </div>
        <div className="demo-item">
          <img src="https://picsum.photos/202" alt="Feature 3" className="feature-image" />
          <div className="feature-content">
            <h4>Intuitive UI/UX</h4>
            <p>Easy to use for all users.</p>
          </div>
        </div>
      </section>

      <button onClick={incrementCount}>Click me {count} times</button>

      <footer className="page-footer">
        <p>&copy; 2023 Our Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;