import durationPlugin from "dayjs/plugin/duration";
import dayjs from "dayjs";

/**
 * Example usage
 * console.log(formatTime(500)); // Output: "8 minutes 20 seconds"
 * console.log(formatTime(3600)); // Output: "1 hour"
 * console.log(formatTime(90));   // Output: "1 minute 30 seconds"
 * console.log(formatTime(120));  // Output: "2 minutes"
 */
const formatDuration = (seconds: number): string => {
  dayjs.extend(durationPlugin);

  const duration = dayjs.duration(seconds, "seconds");
  const hours = duration.hours();
  const minutes = duration.minutes();
  const remainingSeconds = duration.seconds();

  if (hours > 0) {
    return `${hours} ${hours === 1 ? "hour" : "hours"}`;
  } else if (minutes > 0) {
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
  } else {
    return `${remainingSeconds} ${remainingSeconds === 1 ? "second" : "seconds"}`;
  }
};

export default formatDuration;
