import relativeTimePlugin from "dayjs/plugin/relativeTime";
import dayjs from "dayjs";

const timeSince = (dateString: Date): string => {
  dayjs.extend(relativeTimePlugin);

  return dayjs(dateString).fromNow();
};

export default timeSince;
