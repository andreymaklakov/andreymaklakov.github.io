import React, { FC, useState } from "react";
import cn from "classnames";
import { useSelector } from "react-redux";

import { catalogBtns } from "../../../constants/catalogBtns";
import { lessons } from "../../../constants/lessonsData";
import LessonCard from "../LessonCard";
import ShowMore from "../ShowMore";
import { getTheme, Theme } from "../../store/theme";

import styles from "./Catalog.module.scss";

const Catalog: FC = () => {
  const [active, setActive] = useState({ name: "all", index: 0 });
  const [shownLessons, setShownLessons] = useState(3);

  const theme: Theme = useSelector(getTheme());

  const filteredLessons = lessons.filter((lesson) => {
    if (lesson.theme === active.name) {
      return lesson.theme === active.name;
    } else if (active.name === "notCompleted") {
      return lesson.tasks > lesson.completedTasks;
    } else if (active.name === "completed") {
      return lesson.tasks === lesson.completedTasks;
    } else if (active.name === "all") {
      return lesson;
    }
  });

  const lessonToShow = filteredLessons.slice(0, shownLessons);

  const btnStyles = (name: string, index: number) => {
    if (name === active.name) {
      return styles.btn_active;
    }
    if (active.index - 1 === index) {
      return styles.btn_before_active;
    }
  };

  const handleClick = (name: string, index: number) => {
    setActive({ name, index });
  };

  const handleShowLessonsIncrement = () => {
    setShownLessons((prevState) => prevState + 3);
  };

  const btnsBlockStyles = cn({
    [styles.btnsBlock]: true,
    [styles.btnsBlock_dark]: theme === "dark",
  });

  return (
    <div className={styles.catalog}>
      <h2>Каталог тем</h2>

      <div className={btnsBlockStyles}>
        {catalogBtns.map((btn, i) => (
          <button
            onClick={() => handleClick(btn.name, i)}
            className={btnStyles(btn.name, i)}
            key={btn.name}
          >
            {btn.content}
          </button>
        ))}
      </div>

      <div className={styles.cardsGrid}>
        {lessonToShow.map((lesson, i) => (
          <LessonCard key={lesson.header + i} lesson={lesson} />
        ))}
      </div>

      {lessonToShow < filteredLessons ? (
        <ShowMore onIncrement={handleShowLessonsIncrement} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Catalog;
