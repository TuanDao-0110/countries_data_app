import React from "react";
import { Link } from "react-router-dom";
const Main = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl md:text-6xl font-bold text-center mb-8">Explore the world</h1>
      <p className="text-gray-600 text-xl md:text-2xl text-center mb-12">Discover new countries and learn about their cultures.</p>
      <Link to="/countries" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-4 px-8 rounded">
        Get started
      </Link>
    </div>
  );
};

export default Main;
