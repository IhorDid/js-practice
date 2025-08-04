// async / await Курс криптовалют: Створи async‑функцію, що послідовно викликає getRate('BTC') і getRate('ETH')
// та повертає середнє значення; покажи прогрес у console.time.try…catch; остаточний return

const cryptoFetch = async () => {
  let btc, eth;
  try {
    console.time('BTC');
    btc = await getRate('BTC');
  } catch (error) {
    console.log('btc', error);
  } finally {
    console.timeEnd('BTC');
  }

  try {
    console.time('ETH');
    eth = await getRate('ETH');
  } catch (error) {
    console.log('eth', error);
  } finally {
    console.timeEnd('ETH');
  }

  return { btc, eth };
};

cryptoFetch().then(data => console.log(data));
