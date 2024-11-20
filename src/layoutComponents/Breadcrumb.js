// components/Breadcrumbs/Breadcrumb.js
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-sm text-gray-400 mb-4">
      <ul className="flex space-x-2">
        {pathnames.map((name, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          return (
            <li key={index}>
              <Link to={"/"} className="hover:underline text-gray-200">
                docs
              </Link>
              &nbsp;
              {">"}
              &nbsp;
              <Link to={routeTo} className="hover:underline text-gray-200">
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </Link>
              {index < pathnames.length - 1 && <span className="px-2">/</span>}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
