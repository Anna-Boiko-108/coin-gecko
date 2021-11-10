import axios from "axios";

import { BASE_COIN_GECKO_URL, SUCCESS_STATUS_CODE } from "../constants";

const DEFAULT_ORDER = "​market_cap_desc";
const DEFAULT_CURRENCY = "eur";

export const getCoinsMarkets = async ({ params }) => {
  const response = await axios.get(`${BASE_COIN_GECKO_URL}/coins/markets`, {
    params: {
      vs_currency: DEFAULT_CURRENCY,
      order: DEFAULT_ORDER,
      ...params,
    },
  });

  if (response.status === SUCCESS_STATUS_CODE) {
    return response.data;
  }
};
