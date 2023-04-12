interface Options {
  year: "numeric";
  month: "long";
  day: "numeric";
}

export const join = (arr: any, separator: string = ", ") => {
  return arr.filter((n: any) => n).join(separator);
};

export const getDate = (data: number) => {
  const fullDate: Date = new Date(data);

  const options: Options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return fullDate.toLocaleDateString("ru-RU", options);
};
