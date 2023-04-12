import React, { FC } from "react";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  getShowSuggestions,
  getSuggesstions,
} from "../../../store/companySideEffects";
import { receiveData } from "../../../store/companyData";
import { Suggestion } from "../interfaces";
import { AppDispatch } from "../../../store/store";
import { getTheme, Theme } from "../../../store/theme";

import styles from "./Suggestions.module.scss";

const Suggestions: FC = () => {
  const showSuggestions: boolean = useSelector(getShowSuggestions());
  const suggestions: Suggestion[] = useSelector(getSuggesstions());
  const theme: Theme = useSelector(getTheme());

  const dispatch: AppDispatch = useDispatch();

  const handleClick = (suggestion: Suggestion) => {
    dispatch(receiveData(suggestion));
  };

  const sugestionsStyles = cn({
    [styles.suggestions_shown]: showSuggestions,
    [styles.suggestions]: true,
    [styles.suggestions_dark]: theme === "dark",
  });

  return (
    <div className={sugestionsStyles}>
      {suggestions.map((suggestion, i) => (
        <div
          key={suggestion.data.inn + i}
          onClick={() => handleClick(suggestion)}
        >
          <p>{suggestion.data.name.full_with_opf}</p>
          <p className={styles.secondary_data}>
            Адрес: {suggestion.data.address.value}, ИНН: {suggestion.data.inn}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Suggestions;
