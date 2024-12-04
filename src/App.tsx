import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/Signup';
import ForgotPassword from './pages/Forgot-Password';
import Layout from './pages/Layout';
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
