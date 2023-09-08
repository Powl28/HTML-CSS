const currentDate = new Date();

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const formattedDate = () =>
  `${currentDate.getDate()} ${months[currentDate.getMonth()]} ${
    currentDate.getFullYear() + 543
  } Time ${currentDate.getHours()}:${currentDate.getMinutes()} น.`;