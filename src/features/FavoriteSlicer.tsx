import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface FavoriteType {
  favoriteCountries: string[];
}
const initialState: FavoriteType = {
  favoriteCountries: [],
};

export const FavoriteSlicer = createSlice({
  name: "favorite",
  initialState: initialState,
  reducers: {
    addNewFavarite: (state, action: PayloadAction<string>) => {
      let temp = [...state.favoriteCountries];
      temp.push(action.payload);
      return { ...state, favoriteCountries: temp };
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      if (typeof action.payload === "string" && state.favoriteCountries.length > 0) {
        let index = state.favoriteCountries.findIndex((country) => country === action.payload);
        if (index !== -1) {
          let temp = [...state.favoriteCountries];
          temp.splice(index, 1);
          return { ...state, favoriteCountries: temp };
        }
      }
      return state;
    },
  },
});

export const { addNewFavarite,removeFavorite } = FavoriteSlicer.actions;
export default FavoriteSlicer.reducer;
