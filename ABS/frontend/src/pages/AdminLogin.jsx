import React, { useState } from 'react';
import axios from 'axios';

const AdminLogin = () => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5001/api/admin-login', {
        adminId,
        password
      });

      if (res.data.success) {
        setMessage(`Welcome ${res.data.adminId}`);
        // Redirect or store session info
      } else {
        setMessage(res.data.message);
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Something went wrong!');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <form onSubmit={handleLogin} className="bg-white p-8 rounded-xl shadow-md w-96 space-y-4">
        <h2 className="text-2xl font-bold text-center">Admin Login</h2>

        <input
          type="text"
          placeholder="Admin ID"
          value={adminId}
          onChange={(e) => setAdminId(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          required
        />

        <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
          Login
        </button>

        {message && <p className="text-center text-red-500">{message}</p>}
      </form>
    </div>
  );
};

export default AdminLogin;
