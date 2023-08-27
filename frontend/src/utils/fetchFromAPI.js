import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
    method: 'GET',
    url: 'https://youtube-v31.p.rapidapi.com/search',
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '24bc2fde0emshe5f55399973dfa9p1bf969jsncaf820e14566',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};