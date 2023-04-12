import React, { FC } from "react";
import cn from "classnames";
import { useSelector } from "react-redux";

import { Lessons } from "../../../constants/lessonsData";
import { btnStyles, btnText } from "../../../utils/btnUstils";
import { ReactComponent as TickIcon } from "../../../images/completed/TickIcon.svg";
import { ReactComponent as CompletedIcon } from "../../../images/completed/CompletedIcon.svg";
import { completedStylesBackgroundImage } from "../../../utils/analyticsStyles";
import { getTheme, Theme } from "../../store/theme";

import styles from "./Lesson.module.scss";

interface LessonProps {
  lesson: Lessons;
  isBig: boolean;
}

const Lesson: FC<LessonProps> = ({ lesson, isBig }) => {
  const theme: Theme = useSelector(getTheme());

  const lessonStyles = cn({
    [styles.lesson_content_big]: isBig,
    [styles.lesson_content_small]: !isBig,
    [styles.lesson_content_dark]: theme === "dark",
  });

  const renderTasksQnty = () => {
    if (lesson.completedTasks === lesson.tasks) {
      return (
        <span>
          <TickIcon />
          <span>
            <CompletedIcon />
          </span>
        </span>
      );
    } else if (lesson.completedTasks === 0) {
      return (
        <>
          {lesson.tasks} <span>заданий</span>
        </>
      );
    } else {
      return (
        <p>
          {lesson.completedTasks}/{lesson.tasks} <span>заданий</span>{" "}
          <span
            className={styles.completed}
            style={completedStylesBackgroundImage(lesson)}
          />
        </p>
      );
    }
  };

  return (
    <div className={lessonStyles}>
      <h2>{lesson.header}</h2>

      <div className={styles.small_text}>
        {lesson.fitsFor[0]} <span /> {lesson.fitsFor[1]}
      </div>

      <p>{lesson.text}</p>

      <div className={styles.low_line}>
        <button className={btnStyles(lesson)}>{btnText(lesson)}</button>

        {!isBig ? <div>{renderTasksQnty()}</div> : ""}
      </div>
    </div>
  );
};

export default Lesson;
