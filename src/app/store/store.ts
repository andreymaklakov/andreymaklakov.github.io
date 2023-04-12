import {
  Action,
  combineReducers,
  configureStore,
  ThunkAction,
} from "@reduxjs/toolkit";

import companyDataReducer from "./companyData";
import companySideEffectsReducer from "./companySideEffects";
import themeReducer from "./theme";

const rootReducer = combineReducers({
  companySideEffects: companySideEffectsReducer,
  companyData: companyDataReducer,
  theme: themeReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
