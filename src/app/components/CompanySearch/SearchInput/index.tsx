import React, { ChangeEvent, FC } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getSearchValue,
  receiveSuggestion,
} from "../../../store/companySideEffects";
import { AppDispatch } from "../../../store/store";
import Suggestions from "../Suggestions";

import styles from "./SearchInput.module.scss";

const SearchInput: FC = () => {
  const searchValue: string = useSelector(getSearchValue());

  const dispatch: AppDispatch = useDispatch();

  const handleChange = async ({ target }: ChangeEvent<HTMLInputElement>) => {
    dispatch(receiveSuggestion(target.value));
  };

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Введите название организации"
        onChange={handleChange}
        value={searchValue}
      />

      <Suggestions />
    </div>
  );
};

export default SearchInput;
