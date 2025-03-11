export function roundToNearestFiveMinutes(date: Date) {
  const minutes = date.getMinutes();
  const roundedMinutes = Math.floor(minutes / 5) * 5;
  date.setMinutes(roundedMinutes, 0, 0);
  return date;
}
