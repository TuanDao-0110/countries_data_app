import React from "react";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

export const Template = () => {
  return (
    <>
      <div className="flex items-center justify-between flex-col bg-gray-50 p-6">
        <ul className="flex">
          <li className="mr-6 text-center block border font-bold rounded py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-600">
            <Link to="/">Home</Link>
          </li>
          <li className="mr-6 text-center block border font-bold rounded py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-600">
            <Link to={"/countries"}>Countries</Link>
          </li>
          <li className="mr-6 text-center block border font-bold rounded py-2 px-4 bg-gray-200 hover:bg-gray-300 text-gray-600">
            <Link to={"/favorite"}>Favorite</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </>
  );
};
