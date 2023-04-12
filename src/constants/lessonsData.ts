export interface Lessons {
  tasks: number;
  completedTasks: number;
  header: string;
  fitsFor: string[];
  text: string;
  theme: "library" | "work";
}

export const lessons: Lessons[] = [
  {
    tasks: 10,
    completedTasks: 8,
    header: "Начало работы",
    fitsFor: ["Для новичка", "Основы работы"],
    text: "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
    theme: "work",
  },
  {
    tasks: 10,
    completedTasks: 3,
    header: "Начало работы",
    fitsFor: ["Для новичка", "Основы работы"],
    text: "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
    theme: "work",
  },
  {
    tasks: 10,
    completedTasks: 10,
    header: "Добро пожаловать!",
    fitsFor: ["Для новичка", "Основы работы"],
    text: "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
    theme: "work",
  },
  {
    tasks: 10,
    completedTasks: 0,
    header: "Введение в рабочую среду",
    fitsFor: ["Для новичка", "Основы работы"],
    text: "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
    theme: "work",
  },
  {
    tasks: 255,
    completedTasks: 0,
    header: "Работа с библиотеками GPN",
    fitsFor: ["Профессионалу", "Библиотеки"],
    text: "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
    theme: "library",
  },
  {
    tasks: 255,
    completedTasks: 0,
    header: "Работа с библиотеками GPN",
    fitsFor: ["Профессионалу", "Библиотеки"],
    text: "Познакомьтесь ближе с компанией и узнайте больше о том, что вы делаете",
    theme: "library",
  },
];
