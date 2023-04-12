import React, { FC } from "react";
import Catalog from "../Catalog";

import Recommended from "../Recommended";
import ScrollBlock from "../ScrollBlock";

const StudyingPage: FC = () => {
  return (
    <div>
      <Recommended />

      <ScrollBlock />

      <Catalog />
    </div>
  );
};

export default StudyingPage;
