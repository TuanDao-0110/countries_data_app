import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface FavoriteType {
  favoriteCountries: string[];
}
const setData = (): Array<string> => {
    const storedData = localStorage.getItem("countries");
  if (storedData) {
    return JSON.parse(storedData);
  }
  return [];
};
const initialState: FavoriteType = {
  favoriteCountries: setData(),
};

export const FavoriteSlicer = createSlice({
  name: "favorite",
  initialState: initialState,
  reducers: {
    addNewFavarite: (state, action: PayloadAction<string>) => {
      let temp = [...state.favoriteCountries];
      temp.push(action.payload);
      localStorage.setItem("countries", JSON.stringify(temp));
      return { ...state, favoriteCountries: temp };
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      if (typeof action.payload === "string" && state.favoriteCountries.length > 0) {
        let index = state.favoriteCountries.findIndex((country) => country === action.payload);
        if (index !== -1) {
          let temp = [...state.favoriteCountries];
          temp.splice(index, 1);
          localStorage.setItem("countries", JSON.stringify(temp));
          return { ...state, favoriteCountries: temp };
        }
      }
      return state;
    },
  },
});

export const { addNewFavarite, removeFavorite } = FavoriteSlicer.actions;
export default FavoriteSlicer.reducer;
