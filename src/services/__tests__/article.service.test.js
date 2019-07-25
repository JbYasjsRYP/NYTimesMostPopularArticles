jest.mock('axios', () => {
  return {
    get: jest.fn(() => Promise.resolve({data: {
      results: [
        {id: 1}, 
        {id: 2}
      ]
    }}))
  }
});

import { getAllArticlesBySectionAndPeriod } from '../article.service';
import axios from 'axios';

it('When getAllArticlesBySectionAndPeriod is called, it should return list of articles', async () => {
  const response = await getAllArticlesBySectionAndPeriod();
  expect(axios.get).toBeCalled();
  expect(response.length).toBe(2);
});