// Functions	Міні‑калькулятор процентів: Напиши функцію getPercent(part, whole, precision = 2) із
// дефолтним параметром, яка повертає число‑відсоток і рядок "23.45%".
// Перевір, щоб whole не дорівнював 0 – вкинь Error.значення за замовчуванням; викидання / обробка помилки

const getPercent = (part, whole, precision = 2) => {
  const convertPercent = ((part / whole) * 100).toFixed(precision);
  const error = "Значення 'whole' не може дорівнювати 0";
  return whole !== 0 ? `${convertPercent}` : error;
};

console.log(getPercent(20, 80));
