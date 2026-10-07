function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(3);

  const period = hours >= 12 ? "pm" : "am";
  const hours12 = hours % 12 === 0 ? 12 : hours % 12;

  return `${String(hours12).padStart(2, "0")}:${minutes} ${period}`;
}

export {formatAs12HourClock};
