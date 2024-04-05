const currentDate: Date = new Date();

const options: Intl.DateTimeFormatOptions = {
  year: "numeric",
  month: "long",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
};

export const formattedDate: string = new Intl.DateTimeFormat(
  "nb-NO",
  options
).format(currentDate);

console.log(formattedDate);
