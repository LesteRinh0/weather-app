import "./date.css";

const DateToday = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const gsDayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let today = new Date();
  let dayName = gsDayNames[today.getDay()];
  let monthName = monthNames[today.getMonth()];
  let hh = today.getHours();
  let mm = today.getMinutes();
  let suffix;
  if (today.getHours() > 12) {
    suffix = "PM";
  } else {
    suffix = "AM";
  }
  if (hh < 10) hh = "0" + hh;
  if (mm < 10) mm = "0" + mm;

  return (
    <div className="date-today">
      {hh + ":" + mm + " " + suffix}
      <p>
        {dayName +
          ", " +
          today.getDate() +
          " " +
          monthName +
          " " +
          today.getFullYear()}
      </p>
    </div>
  );
};

export default DateToday;
