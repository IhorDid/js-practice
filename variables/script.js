// Variables & Data Types	Конвертер валют із фіксованими курсами:
// Створи скрипт, що зчитує суму в гривнях, вибір валюти(USD, EUR, PLN) і повертає рядок "1000₴ → 24.52€".
// Курси тримай у константах, результат округли до 2 знаків.використати const/let; перевірити тип введених даних
// і конвертувати рядок у число; форматування через шаблонні рядки

const usd = 0.027;
const eur = 0.0245;
const pln = 0.105;

let amount = prompt("Введи суму в гривнях (₴):");
let currency = prompt("У яку валюту конвертувати? (USD, EUR, PLN)");

if (isNaN(parseFloat(amount)) || amount <= 0) {
  alert("Помилка: введи коректну суму.");
} else {
  let result;
  let symbol;

  switch (currency.toUpperCase()) {
    case "USD":
      result = amount * usd;
      symbol = "$";
      break;
    case "EUR":
      result = amount * eur;
      symbol = "€";
      break;
    case "PLN":
      result = amount * pln;
      symbol = "zł";
      break;
    default:
      alert("Помилка: така валюта не підтримується.");
      result = null;
  }

  if (result !== null) {
    const converted = result.toFixed(2);
    alert(`${amount}₴ → ${converted}${symbol}`);
  }
}
