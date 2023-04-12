import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import { Company, Suggestion } from "../components/CompanySearch/interfaces";
import { options, companyURL } from "./../../constants/tasks";
import { AppThunk, RootState } from "./store";

interface InitialState {
  suggestions: Suggestion[];
  searchValue: string;
  showSuggestions: boolean;
}

const initialState: InitialState = {
  suggestions: [],
  searchValue: "",
  showSuggestions: false,
};

const companySideEffects = createSlice({
  name: "companySideEffects",
  initialState,
  reducers: {
    suggestionsReceived(state, action) {
      state.suggestions = action.payload;
    },
    searchValueReceived(state, action) {
      state.searchValue = action.payload;
    },
    showSuggestionsChanged(state, action) {
      state.showSuggestions = action.payload;
    },
  },
});

const { reducer: companySideEffectsReducer, actions } = companySideEffects;
export const {
  suggestionsReceived,
  searchValueReceived,
  showSuggestionsChanged,
} = actions;

export const receiveSuggestion =
  (value: string): AppThunk =>
  async (dispatch): Promise<void> => {
    dispatch(searchValueReceived(value));

    const query = value.trim();
    if (query.length < 1) {
      dispatch(suggestionsReceived([]));
      dispatch(showSuggestionsChanged(false));
      return;
    }

    const body = { query: query, branch_type: "MAIN", count: 5 };

    try {
      const { data } = await axios.post<Company>(companyURL, body, options);

      dispatch(suggestionsReceived(data.suggestions));

      if (data.suggestions.length) {
        dispatch(showSuggestionsChanged(true));
      } else {
        dispatch(showSuggestionsChanged(false));
      }
    } catch (error) {
      console.log(error);
    }
  };

export const getSuggesstions = () => (state: RootState) =>
  state.companySideEffects.suggestions;
export const getSearchValue = () => (state: RootState) =>
  state.companySideEffects.searchValue;
export const getShowSuggestions = () => (state: RootState) =>
  state.companySideEffects.showSuggestions;

export default companySideEffectsReducer;
