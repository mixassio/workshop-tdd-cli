import fs from 'fs';
import nock from 'nock';
import exchange from '../src/index';

nock.disableNetConnect();
describe('Test function', () => {
  const data = JSON.parse(fs.readFileSync('./__tests__/__fixtures__/cbrf.json', 'utf8'));
  const truResponse = JSON.parse(fs.readFileSync('./__tests__/__fixtures__/trueResponse.json', 'utf8'));

  it('check simple situate', async () => {
    const httpLib = () => ({
      status: 200,
      data,
    });
    const answer = await exchange(httpLib);
    expect(answer).toEqual(truResponse);
  });
});
