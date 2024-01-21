import axios from 'axios';
import { coinloreRoutes } from './../API/coinloreAPI';

export const getCryptocurrenciesList = async (ids) => {
  const route = coinloreRoutes.GETticker;
  const config = {
    params: {
      id: ids,
    },
  };

  let cryptocurrenciesList;

  try {
    const response = await axios.get(route, config);
    cryptocurrenciesList = response.data;
  } catch (error) {}

  return cryptocurrenciesList;
};
