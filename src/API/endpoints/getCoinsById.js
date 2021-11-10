import axios from "axios";

import { BASE_COIN_GECKO_URL, SUCCESS_STATUS_CODE } from "../constants";

export const getCoinsById = async ({ id, params }) => {
  const response = await axios.get(`${BASE_COIN_GECKO_URL}/coins/${id}`, {
    params: {
      localization: false,
      tickers: false,
      community_data: false,
      developer_data: false,
      sparkline: false,
      ...params,
    },
  });

  if (response.status === SUCCESS_STATUS_CODE) {
    return response.data;
  }
};
