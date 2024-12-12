import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const NavLinks = [
    {
      title: "UserManage",
      path: "/",
    },
    {
      title: "Recipes",
      path: "/recipes",
    },
    {
      title: "Cart",
      path: "/cart",
    },
    {
      title: "Discussion",
      path: "/discussion",
    },
    {
      title: "Login",
      path: "/login",
    },
  ];

  return (
    <div className="flex items-center justify-between px-4 py-3 sticky top-0 bg-zinc-400 shadow-md z-50">
      <div className="text-lg font-bold text-white">
        <NavLink to="/">Home</NavLink>
      </div>
      <div className="flex items-center gap-6">
        {NavLinks.map((navdata, index) => (
          <NavLink key={index} to={navdata.path}>
            <button
              type="button"
              className="text-gray-500 font-bold hover:text-slate-200 hover:underline"
            >
              {navdata.title}
            </button>
          </NavLink>
        ))}
      </div>
    </div>
  );
};
