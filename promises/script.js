// Promises	Імітація запиту погоди: Функція getWeather(city) повертає проміс, що розв’язується за 1‑2 с випадковою температурою(°C)
// або відхиляється з ймовірністю 10 %.ланцюжок.then().catch(); обробка помилки

const getWeather = city => {
  const delay = (Math.random() + 1) * 1000;
  const promise = new Promise((res, rej) => {
    setTimeout(() => {
      const random = Math.random();
      if ((random > 0, 1)) {
        const temp = Math.random().toFixed() * 20;
        res(`В місті ${city} температура зараз ${temp} °C`);
      } else {
        rej('Error');
      }
    }, delay);
  });
  return promise;
};

getWeather('Полтава')
  .then(res => console.log(res))
  .catch(err => console.log(err));
