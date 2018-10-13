import fs from 'fs';
import nock from 'nock';
import exchange from '../src/index';

nock.disableNetConnect();
describe('Test function', () => {
  const data = fs.readFileSync('./__tests__/__fixtures__/cbrf.json', 'utf8').toString();
  const truResponse = fs.readFileSync('./__tests__/__fixtures__/trueResponse.json', 'utf8').toString();

  it('check', async () => {
    const response = () => ({
      status: 200,
      data,
    });
    const answer = await exchange(response);
    console.log(answer);
    console.log(truResponse);
    expect(JSON.parse(answer)).toEqual(JSON.parse(truResponse));
  });
});
