import { createSlice } from "@reduxjs/toolkit";

import { AppThunk, RootState } from "./store";

export type Theme = "dark" | "light" | null;

interface InitialState {
  theme: Theme;
}

const initialState: InitialState = {
  theme: null,
};

const theme = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeChanged(state) {
      state.theme = state.theme === "dark" ? "light" : "dark";

      localStorage.setItem("theme", state.theme);
    },
    themeReceived(state, actions) {
      state.theme = actions.payload;
    },
  },
});

const { reducer: themeReducer, actions } = theme;
export const { themeChanged, themeReceived } = actions;

export const changeTheme = (): AppThunk => (dispatch) => {
  dispatch(themeChanged());
};

export const receiveTheme =
  (theme: Theme): AppThunk =>
  (dispatch) => {
    dispatch(themeReceived(theme));
  };

export const getTheme = () => (state: RootState) => state.theme.theme;

export default themeReducer;
