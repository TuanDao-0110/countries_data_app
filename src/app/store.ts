import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import CountriesSlicer from "../features/CountriesSlicer";
import FavoriteSlicer from "../features/FavoriteSlicer";
export const store = configureStore({
  reducer: {
    contries: CountriesSlicer,
    favorite: FavoriteSlicer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
