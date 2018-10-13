import fs from 'fs';
import nock from 'nock';
import exchange from '../src/index';

nock.disableNetConnect();
describe('Test function', () => {
  const data = JSON.parse(fs.readFileSync('./__tests__/__fixtures__/cbrf.json', 'utf8'));
  const trueResponse = JSON.parse(fs.readFileSync('./__tests__/__fixtures__/trueResponse.json', 'utf8'));

  it('check with dependency inversion', async () => {
    const httpLib = () => ({
      status: 200,
      data,
    });
    const answer = await exchange(httpLib);
    expect(answer).toEqual(trueResponse);
  });
  it('check with mock', async () => {
    nock('https://www.cbr-xml-daily.ru')
      .get('/daily_json.js')
      .reply(200, { data });
    const answer = await exchange();
    console.log(answer);
    expect(answer).toEqual(trueResponse);
  });
});
