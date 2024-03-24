import dayjs, { OpUnitType } from "dayjs";
import getPastDate from "./getPastDate.lib";

type getIntervalDatesProps = OpUnitType | "day";

const getIntervalDates = (interval: getIntervalDatesProps): { startDate: Date; endDate: Date } => {
  const currentDate = dayjs();
  let startDate, endDate;

  if (interval === "day") {
    startDate = getPastDate("day");
    endDate = dayjs().toDate();
  } else if (interval === "M" || interval === "month") {
    startDate = getPastDate("month");
    endDate = currentDate.endOf("day").toDate();
  } else {
    startDate = getPastDate("week");
    endDate = currentDate.endOf(interval).toDate();
  }

  return {
    startDate,
    endDate,
  };
};

export default getIntervalDates;
