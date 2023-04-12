import React, { FC, useState } from "react";
import cn from "classnames";
import { useSelector } from "react-redux";

import { ReactComponent as ArrowRight } from "../../../images/arrows/ArrowRight.svg";
import { ReactComponent as ArrowLeft } from "../../../images/arrows/ArrowLeft.svg";

import { lessons } from "../../../constants/lessonsData";
import LessonCard from "../LessonCard";
import { getTheme, Theme } from "../../store/theme";

import styles from "./ScrollBlock.module.scss";

const ScrollBlock: FC = () => {
  const [hideLearnedLessons, setHideLearnedLessons] = useState(false);
  const [firstShownLessonIndex, setFirstShownLessonIndex] = useState(0);

  const theme: Theme = useSelector(getTheme());

  const scrollBlockStyles = cn({
    [styles.block]: true,
    [styles.block_dark]: theme === "dark",
  });

  lessons.sort((lesson) => {
    if (lesson.completedTasks === lesson.tasks) {
      return -1;
    } else {
      return 1;
    }
  });

  const filteredLessons = lessons.filter((lesson) => {
    if (hideLearnedLessons) {
      return lesson.completedTasks < lesson.tasks;
    }
    return lesson;
  });

  const shownLessons = filteredLessons.slice(
    firstShownLessonIndex,
    firstShownLessonIndex + 3
  );

  const handleFirstShownLessonIndexIncrement = () => {
    if (firstShownLessonIndex < filteredLessons.length - 1) {
      setFirstShownLessonIndex((prevState) => prevState + 1);
    }
  };

  const handleFirstShownLessonIndexDecrement = () => {
    if (firstShownLessonIndex > 0) {
      setFirstShownLessonIndex((prevState) => prevState - 1);
    }
  };

  const handleClick = () => {
    setHideLearnedLessons((prevState) => !prevState);
  };

  return (
    <div className={scrollBlockStyles}>
      <div className={styles.block_header}>
        <div className={styles.block_header_heading}>
          <h2>Путь Front End Developer</h2>

          <button onClick={handleClick} className="tertiary-btn">
            Скрыть пройденные
          </button>
        </div>

        <div className={styles.block_header_btns}>
          <button onClick={handleFirstShownLessonIndexDecrement}>
            <ArrowLeft />
          </button>

          <button onClick={handleFirstShownLessonIndexIncrement}>
            <ArrowRight />
          </button>
        </div>
      </div>

      <div className={styles.block_cards}>
        {shownLessons.map((lesson, i) => (
          <LessonCard key={lesson.header + i} lesson={lesson} />
        ))}
      </div>
    </div>
  );
};

export default ScrollBlock;
