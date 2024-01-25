import dayjs from "dayjs";

const formatDate = (dateString: string): string => {
  const formattedDate = dayjs(dateString).format("MMM DD, YYYY");
  return formattedDate;
};

export default formatDate;
