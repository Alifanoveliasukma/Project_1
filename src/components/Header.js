import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";

const Header = () => {
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <div className="flex items-center gap-6">
          <Link className="hover:text-violet-900 transition" to="/">Log In</Link>
          <Link className="bg-violet-900 text-white px-4 py-3 rounded-lg" to="/">Log Out</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
