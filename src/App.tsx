import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import ForgotPassword from './pages/Forgot-Password';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Login />} />
          <Route path="contact" element={<SignUp />} />
          <Route path="*" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
