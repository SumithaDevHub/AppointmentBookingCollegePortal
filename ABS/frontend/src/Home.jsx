import React from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.png";

const Home = () => {
  return (
    <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat text-white bg-gray-800">
      {/* Top Navigation */}
      <div className="flex justify-between items-center px-8 py-4">
        <img src={logo} alt="BIT Logo" className="h-20" />
        <div className="space-x-8 text-white font-semibold">
          <Link to="/home" className="hover:text-blue-300">HOME</Link>
          <Link to="#" className="hover:text-blue-300">CONTACT US</Link>
          <Link to="#" className="hover:text-blue-300">ABOUT US</Link>
        </div>
      </div>

      {/* Centered Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-y-8 text-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-blue-400">BANNARI AMMAN</span> INSTITUTE OF <span className="text-blue-400">TECHNOLOGY</span>
          </h1>
          <h2 className="text-xl mt-4 font-semibold">APPOINTMENT BOOKING</h2>
        </div>

        {/* Login Buttons */}
        <div className="flex flex-col md:flex-row gap-6 text-xl font-semibold">
          <Link to="/student-login" className="hover:text-blue-300">Login as Student</Link>
          <Link to="/staff-login" className="hover:text-blue-300">Login as Faculty</Link>
          <Link to="/admin-login" className="hover:text-blue-300">Login as Admin</Link>
        </div>

        {/* Register Links */}
        <div className="flex flex-col md:flex-row gap-6 text-sm font-semibold">
          <Link to="#" className="underline hover:text-blue-300">REGISTER AS STUDENT</Link>
          <Link to="#" className="underline hover:text-blue-300">REGISTER AS FACULTY</Link>
          <Link to="#" className="underline hover:text-blue-300">REGISTER AS ADMIN</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
