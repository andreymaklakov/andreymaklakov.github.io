import { ReactElement } from "react";
import { Lessons } from "../constants/lessonsData";

import { ReactComponent as IconBackward } from "../images/btns/IconBackward.svg";

export const btnText = (lesson: Lessons): ReactElement | string => {
  if (lesson.tasks === lesson.completedTasks) {
    return (
      <>
        <IconBackward /> Пройти заново
      </>
    );
  } else if (lesson.completedTasks === 0) {
    return "Начать";
  } else {
    return "Продолжить тему";
  }
};

export const btnStyles = (lesson: Lessons): string => {
  if (lesson.completedTasks === lesson.tasks) {
    return "secondary-btn";
  }

  return "primary-btn";
};
