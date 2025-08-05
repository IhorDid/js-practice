// Arrays	Статистика оцінок: Є масив[7, 8, 9, 4, 6, 10, 9,0,].
// Створи функції avg, median, mode, що повертають середнє, медіану й моду.
// Зведи результат в об’єкт.методи reduce, sort, filter

// Медіана	Центр даних
// Мода	    Найпоширеніше значення

const arr = [7, 8, 9, 4, 6, 10, 9];

const avg = arr => {
  const sum = arr.reduce((acc, item) => acc + item, 0);
  const avgValue = sum / arr.length;
  return avgValue;
};
console.log(avg(arr));

const median = arr => {
  const newArr = [...arr].sort((a, b) => a - b);

  const midle = newArr.length / 2;

  const medianValue =
    midle % 1 === 0
      ? newArr[midle] + newArr[midle + 1]
      : newArr[Math.floor(midle)];

  return medianValue;
};

console.log(median(arr));

const mode = arr => {
  const modeValue = arr.filter((item, idx) => {
    return arr.indexOf(item) !== idx;
  });
  return modeValue;
};

const objValue = {
  avg: avg(arr),
  median: median(arr),
  mode: mode(arr),
};

console.log(objValue);
