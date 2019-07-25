import axios from 'axios';
import config from '../config';

export const getAllArticlesBySectionAndPeriod = async (section, period) => {
  try {
    const { baseUrl, key } = config.api.article;
    const response = await axios.get(`${baseUrl}/${section}/${period}.json?api-key=${key}`);
    return response.data && response.data.results ? response.data.results : null;
  } catch (error) {
    throw error;
  }
}