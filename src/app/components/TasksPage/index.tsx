import React, { FC, useState } from "react";

import { TaskName, Tasks, tasks } from "../../../constants/tasks";
import CompanySearch from "../CompanySearch";
import Geolocation from "../Geolocation";

import styles from "./TasksPage.module.scss";

const TasksPage: FC = () => {
  const [shownTask, setShownTask] = useState("");

  const handleClick = (task: TaskName) => {
    setShownTask(task);
  };

  return (
    <div className={styles.tasks_content}>
      <div className={styles.tasks_btns}>
        {tasks.map((task) => (
          <button
            key={task.name}
            className="primary-btn"
            onClick={() => handleClick(task.name)}
          >
            {task.content}
          </button>
        ))}
      </div>

      {shownTask === "location" ? <Geolocation /> : ""}
      {shownTask === "company" ? <CompanySearch /> : ""}
    </div>
  );
};

export default TasksPage;
