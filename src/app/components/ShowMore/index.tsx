import React, { FC } from "react";
import cn from "classnames";
import { useSelector } from "react-redux";

import { ReactComponent as ArrowDown } from "../../../images/arrows/ArrowDown.svg";
import { getTheme, Theme } from "../../store/theme";

import styles from "./ShowMore.module.scss";

interface ShowMoreProps {
  onIncrement: () => void;
}

const ShowMore: FC<ShowMoreProps> = ({ onIncrement }) => {
  const theme: Theme = useSelector(getTheme());

  const showMoreStyles = cn({
    [styles.show_more_container]: true,
    [styles.show_more_container_dark]: theme === "dark",
  });

  return (
    <div className={showMoreStyles}>
      <div />

      <button onClick={onIncrement} className="tertiary-btn">
        <span>Показать ещё</span>
        <ArrowDown />
      </button>

      <div />
    </div>
  );
};

export default ShowMore;
