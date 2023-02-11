import React from "react";
import { CountryType } from "./CountriesSlicer";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { Dispatch } from "@reduxjs/toolkit";
import { addNewFavarite, removeFavorite } from "./FavoriteSlicer";

export const RenderCard = (country: CountryType, index: number, liked: boolean) => {
  const { pathname } = useLocation();
  const dispatch = useDispatch<Dispatch>();
  return (
    <div className="group relative" key={index}>
      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
        <img className="h-full w-full object-cover object-center" src={country.flags.png} alt="Flag" />
      </div>
      <div className=" border-gray-200">
        <h3 className="mt-6 text-sm text-gray-500">{country.name.official}</h3>
        <p className="text-base font-semibold text-gray-900">Capital: {country.capital}</p>
        <div className="">
          <Link to={`${pathname.length === 10 ? country.name.official : "/countries"}`} state={country}>
            <button className="bg-gray-500 p-2 rounded-md text-gray-50 text-md hover:bg-gray-100 hover:text-gray-500 duration-150">
              {`${pathname.length === 10 ? "Details" : "Back"}`}
            </button>
          </Link>
          <span
            className={`ml-5  font-black ${liked && "text-yellow-500"} hover:text-yellow-500 duration-100 cursor-pointer`}
            onClick={() => {
              liked ? dispatch(removeFavorite(country.name.common)) : dispatch(addNewFavarite(country.name.common));
            }}
          >
            ☆
          </span>
        </div>
      </div>
    </div>
  );
};
