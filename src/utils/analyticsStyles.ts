import { Lessons } from "../constants/lessonsData";

export const completedStylesBackgroundImage = (
  lesson: Lessons
): { backgroundImage: string } => {
  if (lesson.tasks / lesson.completedTasks <= 2) {
    return {
      backgroundImage: `linear-gradient(
          calc(270deg - (360deg - (360deg / ${lesson.tasks} * ${lesson.completedTasks}))),
          transparent 50%,
          #22c38e 50%
        ),
       linear-gradient(90deg, #ddd 50%, #22c38e 50%)`,
    };
  } else {
    return {
      backgroundImage: `linear-gradient(
          calc(-90deg + (360deg / ${lesson.tasks} * ${lesson.completedTasks})),
          #ddd 50%,
          transparent 50%
        ),
       linear-gradient(90deg, #ddd 50%, #22c38e 50%)`,
    };
  }
};
