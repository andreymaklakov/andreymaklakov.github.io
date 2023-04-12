export type TaskName = "location" | "company";

export type TableDataData =
  | "nameShort"
  | "nameFull"
  | "innKpp"
  | "address"
  | "status"
  | "regDate"
  | "killDate"
  | "founders"
  | "branchesQnty";

export interface Tasks {
  name: TaskName;
  content: string;
}

export interface TableData {
  label: string;
  data: TableDataData;
}

interface Options {
  headers: { Authorization: string };
}

export const tasks: Tasks[] = [
  {
    name: "location",
    content: "Узнать местоположение",
  },
  {
    name: "company",
    content: "Найти компанию",
  },
];

export const token: string = "830adb2c5e964bfb71cfea8e878cb769c50f8f06";

export const options: Options = {
  headers: {
    Authorization: "Token " + token,
  },
};

export const geoURL: string =
  "https://suggestions.dadata.ru/suggestions/api/4_1/rs/geolocate/address";

export const companyURL: string =
  "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party";

export const tableData: TableData[] = [
  {
    label: "Наименование",
    data: "nameShort",
  },
  {
    label: "Полное наименование",
    data: "nameFull",
  },
  {
    label: "ИНН / КПП",
    data: "innKpp",
  },
  {
    label: "Адрес",
    data: "address",
  },
  {
    label: "Статус",
    data: "status",
  },
  {
    label: "Дата основания",
    data: "regDate",
  },
  {
    label: "Дата ликвидации",
    data: "killDate",
  },
  {
    label: "Основатели компании",
    data: "founders",
  },
];
