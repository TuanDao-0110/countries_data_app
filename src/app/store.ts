import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import CountriesSlicer from "./CountriesSlicer";
import FavoriteSlicer from "./FavoriteSlicer";
export const store = configureStore({
  reducer: {
    contries: CountriesSlicer,
    favorite: FavoriteSlicer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
