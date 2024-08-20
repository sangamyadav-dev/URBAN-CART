// import React from 'react';

import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold px-10"> UrbanCart Admin</h1>
      <div>
      <Link to='/Admin/AdminLogin' className="bg-blue-500 text-white px-4 py-2 rounded">
        Login
      </Link>
      </div>
    </header>
  );
};

export default Header;
