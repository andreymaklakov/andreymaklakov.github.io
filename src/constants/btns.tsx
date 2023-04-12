import { ReactElement } from "react";

import { ReactComponent as Bell } from "../images/btns/Bell.svg";
import { ReactComponent as Sun } from "../images/btns/Sun.svg";
import { ReactComponent as Question } from "../images/btns/Question.svg";

export interface SvgButton {
  content: ReactElement;
  name: "bell" | "question" | "sun";
}

export const svgButtons: SvgButton[] = [
  { content: <Bell />, name: "bell" },
  { content: <Question />, name: "question" },
  { content: <Sun />, name: "sun" },
];
