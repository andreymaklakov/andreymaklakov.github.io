import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";

import CompanyData from "./CompanyData";
import SearchInput from "./SearchInput";
import Branches from "./Branches";
import { AppDispatch } from "../../store/store";
import { cleanData } from "../../store/companyData";

import styles from "./CompanySearch.module.scss";

const CompanySearch: FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanData());
  }, []);

  return (
    <div className={styles.container}>
      <SearchInput />

      <CompanyData />

      <Branches />
    </div>
  );
};

export default CompanySearch;
