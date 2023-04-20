export const dateParser = (date: Date): [string, string] => {
  const [y, m, d] = [date.getFullYear(), date.getMonth() + 1, date.getDate()];
  const [h, min, sec] = [date.getHours(), date.getMinutes(), date.getSeconds()];

  return [
    `${y}.` +
    `${('0').repeat(2 - String(m).length)}${m}.` +
    `${('0').repeat(2 - String(d).length)}${d}.`,

    `${('0').repeat(2 - String(h).length)}${h}:` +
    `${('0').repeat(2 - String(min).length)}${min}:` +
    `${('0').repeat(2 - String(sec).length)}${sec}`
  ];
}
