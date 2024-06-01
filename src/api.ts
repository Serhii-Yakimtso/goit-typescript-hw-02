import axios from 'axios';
import { Img } from './types';

const API_KEY = 'vwxgostvbqhov9QaoG0CUPrl8ea4vGkCmt6QxIRWVKw';
axios.defaults.baseURL = 'https://api.unsplash.com/search/photos';

export const fetchImgGallery = async (
  query: string,
  page: number
): Promise<[Img]> => {
  const response = axios.get('', {
    params: {
      query: query,
      page: page,
      per_page: 10,
      client_id: API_KEY,
      orientation: 'landscape',
    },
  });

  return (await response).data.results;
};
