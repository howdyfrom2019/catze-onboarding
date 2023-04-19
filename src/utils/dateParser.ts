export const dateParser = (date: Date): [string, string] => {
  const [y, m, d] = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
  const [h, min, sec] = [date.getHours(), date.getMinutes(), date.getSeconds()];

  return [`${y}.${m}.${d}.`, `${h}:${min}:${sec}`];
}
