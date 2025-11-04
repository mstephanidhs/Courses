import api from './api';

const URLS = {
  getMeal: 'search.php',
};

export const searcMeals = (query, config) => {
  return api
    .get(URLS.URLS.getMeal, {
      baseURL: 'https://www.themealdb.com/api/json/v1/1/',
      params: {
        s: query,
      },
      ...config,
    })
    .then((res) => res.data.meals);
};
