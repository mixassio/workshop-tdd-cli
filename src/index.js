import axios from 'axios';

export default async (req=axios) => {
  const response = await req(`https://www.cbr-xml-daily.ru/daily_json.js`);
  const { Date, Valute } = response.data;
  console.log(response.data)
  const { USD, EUR, SEK, UAH } = Valute;
  return { Date, USD, EUR, SEK, UAH };
};
