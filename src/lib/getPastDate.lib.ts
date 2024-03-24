import dayjs from "dayjs";

const getPastDate = (date: "day" | "week" | "month" | "year"): Date => {
  const currDate = dayjs();

  const pastDate = {
    day: currDate.subtract(1, "day"),
    week: currDate.subtract(7, "day"),
    month: currDate.subtract(1, "month"),
    year: currDate.subtract(1, "year"),
  };

  return pastDate[date].toDate();
};

export default getPastDate;
