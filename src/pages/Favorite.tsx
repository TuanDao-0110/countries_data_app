import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { RenderCard } from "../service/RenderService";

export default function Favorite() {
  const { favoriteCountries } = useSelector((state: RootState) => state.favorite);
  const { countries } = useSelector((state: RootState) => state.contries);

  return (
    <div className="relative h-full">
      <div className=" h-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl  sm:py-24 lg:max-w-none lg:py-2">
            <h2 className="text-2xl font-bold text-gray-900 text-center">Country's Favorite List</h2>
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0 gap-5">
              {countries?.map((country, index) => {
                let testIndex = favoriteCountries.findIndex((i) => i === country.name.common);
                if (testIndex !== -1) {
                  return RenderCard(country, index, true);
                }
              })}
            </div>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
