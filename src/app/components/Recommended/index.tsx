import React, { FC, useState } from "react";
import { useSelector } from "react-redux";
import cn from "classnames";

import { lessons } from "../../../constants/lessonsData";
import { completedStylesBackgroundImage } from "../../../utils/analyticsStyles";
import Lesson from "../Lesson";
import ShowMore from "../ShowMore";
import { getTheme, Theme } from "../../store/theme";

import styles from "./Recommended.module.scss";

const Recommended: FC = () => {
  const [shownLessons, setShownLessons] = useState(1);
  const theme: Theme = useSelector(getTheme());

  const handleShowLessonsIncrement = () => {
    setShownLessons((prevState) => prevState + 1);
  };

  const notCompletedLessons = lessons.filter(
    (lesson) => lesson.completedTasks !== lesson.tasks
  );
  const filteredLessons = notCompletedLessons.slice(0, shownLessons);

  const recommendedStyles = cn({
    [styles.recommended_block_dark]: theme === "dark",
    [styles.recommended_block]: true,
  });

  return (
    <>
      <div className={styles.recommended_container}>
        <h2>Рекомендуемые темы</h2>

        {filteredLessons.map((lesson, i) => (
          <div key={lesson.header + i} className={recommendedStyles}>
            <div
              className={styles.completed}
              style={completedStylesBackgroundImage(lesson)}
            >
              <div className={styles.completed_content}>
                <h4>
                  {lesson.completedTasks}/{lesson.tasks}
                </h4>

                <p>заданий</p>
              </div>
            </div>

            <Lesson lesson={lesson} isBig={true} />
          </div>
        ))}
      </div>

      {notCompletedLessons.length > filteredLessons.length ? (
        <ShowMore onIncrement={handleShowLessonsIncrement} />
      ) : (
        ""
      )}
    </>
  );
};

export default Recommended;
