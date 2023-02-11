import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_COUNTRIES_GETALL, GET_COUNTRIE_BY_NAME } from "../../Source/data";
import { CountryType, WeatherType } from "../../app/CountriesSlicer";

export const getAllCountries = createAsyncThunk("get_all_countries", async (): Promise<CountryType[]> => {
  try {
    const { data } = await axios({
      method: "get",
      url: BASE_COUNTRIES_GETALL,
    });
    return data;
  } catch (error) {
    // return error;
    return Promise.reject(error);
  }
});
export const getCountriesByName = createAsyncThunk("get_countries_name", async (name: string): Promise<CountryType> => {
  try {
    const { data } = await axios({
      method: "get",
      url: GET_COUNTRIE_BY_NAME + name,
    });
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
});

export const getCountriesWeather = createAsyncThunk("get_countries_weather", async (name: string): Promise<WeatherType> => {
  try {
    const { data } = await axios({
      method: "get",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${process.env.REACT_APP_WEATHER_KEY}&units=metric`,
    });
    return data;
  } catch (error) {
    return Promise.reject(error);
  }
});

export const checkLiked = (countryName: string, countryList: Array<string>): boolean => {
  let index = countryList.findIndex((country) => country === countryName);
  if (index !== -1) {
    return true;
  }
  return false;
};


