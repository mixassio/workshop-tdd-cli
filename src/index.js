import axios from 'axios';

const currencies = ['USD', 'EUR', 'SEK', 'UAH'];

export default async (req = axios) => {
  const response = await req('https://www.cbr-xml-daily.ru/daily_json.js');
  const { Date, Valute } = response.data;
  return currencies.reduce((acc, el) => {
    const { Name, Nominal, Value } = Valute[el];
    return { ...acc, [el]: { Name, Nominal, Value } };
  }, { Date });
};
