import React, { ReactElement, ReactNode, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { AppDispatch, RootState } from "../app/store";
import { checkLiked, getCountriesWeather } from "../service/CountriesService";
import { RenderCard } from "../service/RenderService";

export const Country = () => {
  const { countryWeather, status } = useSelector((state: RootState) => state.contries);
  const { favoriteCountries } = useSelector((state: RootState) => state.favorite);

  const { state } = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getCountriesWeather(state.name.common));
  }, [dispatch,state]);

  const renderData = () => {
    let content: ReactElement[] | ReactElement | undefined | ReactNode[];
    if (status === "pending") {
      content = <div>loading...</div>;
    } else {
      content = (
        <div className="flex m-auto justify-center bg-gray-200 h-screen pt-20 px-10">
          {RenderCard(state, 1, checkLiked(state.name.common, favoriteCountries))}
          <div className="flex flex-col items-center p-5 ">
            <h1 className="text-red-400 font-semibold text-4xl">Name: {countryWeather?.name}</h1>
            <h3 className="text-left">{`Weather in ${countryWeather?.name} have temperature is: ${countryWeather?.main.temp.toFixed(1)}℃ `}</h3>
            <h3>
              {" "}
              Temp: {countryWeather?.main.temp.toFixed(1)}℃ | Max: {countryWeather?.main.temp_max.toFixed(1)}℃ | Min:{" "}
              {countryWeather?.main.temp_min.toFixed(1)}℃
            </h3>
            <h3>Humidity:{countryWeather?.main.humidity}°</h3>
            <img src={`http://openweathermap.org/img/wn/${countryWeather?.weather[0].icon}@2x.png`} alt="" width={80} />
          </div>
        </div>
      );
    }
    return content;
  };
  return renderData();
};
