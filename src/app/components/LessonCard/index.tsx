import React, { FC } from "react";
import cn from "classnames";
import { useSelector } from "react-redux";

import { Lessons } from "../../../constants/lessonsData";
import Lesson from "../Lesson";
import { getTheme, Theme } from "../../store/theme";

import styles from "./LessonCard.module.scss";

interface LessonCardProps {
  lesson: Lessons;
}

const LessonCard: FC<LessonCardProps> = ({ lesson }) => {
  const theme: Theme = useSelector(getTheme());

  const lessonCardStyles = cn({
    [styles.card]: true,
    [styles.card_dark]: theme === "dark",
  });

  return (
    <div className={lessonCardStyles}>
      <Lesson lesson={lesson} isBig={false} />
    </div>
  );
};

export default LessonCard;
