import { Navigate, Route, Routes } from "react-router-dom";
import cn from "classnames";

import Header from "./components/Header";
import MainPage from "./components/MainPage";
import StudyingPage from "./components/StudyingPage";
import TasksPage from "./components/TasksPage";
import { getTheme, Theme } from "./store/theme";
import { useSelector } from "react-redux";
import AppLoader from "./components/AppLoader";

function App() {
  const theme: Theme = useSelector(getTheme());

  const mainStyles = cn({
    ["dark_theme"]: theme === "dark",
  });

  return (
    <AppLoader>
      <div>
        <Header />

        <main className={mainStyles}>
          <div className="content">
            <Routes>
              <Route path="/" element={<MainPage />} />

              <Route path="/my-studying" element={<StudyingPage />} />

              <Route path="/tasks" element={<TasksPage />} />

              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
          </div>
        </main>
      </div>
    </AppLoader>
  );
}

export default App;
