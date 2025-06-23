import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import DashBoard from './Pages/DashBoard';
import MySubscription from './Pages/MySubscription';
import { Toaster } from 'react-hot-toast';
import ProtectedRoute from './components/ProtectedRoute';
import axios from 'axios';
import Accounts from './components/Accounts';

const App = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Fetch user on app load
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get('/api/user/profile', { withCredentials: true });
        setUser(res.data.user);
      } catch (err) {
        setUser(null);
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/signin" element={<Signin setUser={setUser} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/account" element={<Accounts />} />
        <Route path="/dashboard" element={
          <ProtectedRoute user={user}>
            <DashBoard />
          </ProtectedRoute>
        } />
        <Route path="/subscription" element={
          <ProtectedRoute user={user}>
            <MySubscription />
          </ProtectedRoute>
        } />
      </Routes>
    </>
  );
};

export default App;
