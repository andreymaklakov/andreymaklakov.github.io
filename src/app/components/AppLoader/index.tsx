import React, { FC, ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch } from "../../store/store";
import { getTheme, receiveTheme, Theme } from "../../store/theme";

const AppLoader: FC<{ children: ReactElement }> = ({ children }) => {
  const theme: Theme = useSelector(getTheme());

  const dispatch: AppDispatch = useDispatch();

  const savedTheme = localStorage.getItem("theme") as Theme;

  useEffect(() => {
    if (savedTheme) {
      dispatch(receiveTheme(savedTheme));
    } else {
      localStorage.setItem("theme", "light");

      dispatch(receiveTheme("light"));
    }
  }, []);

  if (!theme) {
    return <>Загрузка...</>;
  }

  return children;
};

export default AppLoader;
