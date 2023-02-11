import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllCountries, getCountriesByName, getCountriesWeather } from "../features/country/CountriesService";
export interface CountryType {
  name: {
    common: string;
    official: string;
  };
  capital: Array<string>;
  region: string;
  borders: Array<string>;
  area: string;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  currencies?: Object;
  population?: number;
}
export interface WeatherType {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}
export interface StateType {
  status: string;
  countries: CountryType[];
  country: CountryType;
  countryWeather?: WeatherType;
}
const initialState: StateType = {
  status: "",
  countries: [],
  country: {
    name: {
      common: "",
      official: "",
    },
    capital: [],
    region: "",
    borders: [],
    area: "",
    flags: {
      png: "",
      svg: "",
      alt: "",
    },
  },
};
export const countrySlicer = createSlice({
  name: "countrie",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllCountries.pending, (state, action) => {
        return { ...state, status: action.meta.requestStatus };
      })
      .addCase(getAllCountries.fulfilled, (state, action) => {
        return { ...state, countries: action.payload, status: action.meta.requestStatus };
      })
      .addCase(getCountriesWeather.pending, (state, action) => {
        return { ...state, status: action.meta.requestStatus };
      })
      .addCase(getCountriesWeather.fulfilled, (state, action) => {
        return { ...state, countryWeather: action.payload, status: action.meta.requestStatus };
      });
  },
});
export const {} = countrySlicer.actions;
export default countrySlicer.reducer;
