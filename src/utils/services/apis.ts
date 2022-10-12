import { create, DEFAULT_HEADERS } from 'apisauce';
import { LoginParams } from 'redux-manager/auth/saga';
import { BASE_URL, ENDPOINTS } from 'utils/helpers/constants';

export const apisauces = create({
  baseURL: BASE_URL,
  headers: DEFAULT_HEADERS,
  timeout: 3000,
});

type NetworkPromiseResponse<T> = Promise<T>;

function login<T>(data: LoginParams): NetworkPromiseResponse<T> {
  return new Promise((resolve, reject) => {
    apisauces.post(ENDPOINTS.LOG_IN, data)
      .then((res) => {
        if (res.ok) {
          return resolve(res.data as any)
        }
        return reject(res.data)
      })
      .catch(error => {
        return reject(error)
      })
  })
}

function getMarketHeader<T>(): NetworkPromiseResponse<T> {
  return new Promise((resolve, reject) => {
    apisauces.get(ENDPOINTS.GET_MARKET_HEADERS)
      .then((res) => {
        if (res.ok) {
          return resolve(res.data as any)
        }
        reject(res.data);
      })
      .catch(error => {
        reject(error)
      })
  })
}

function getMarketsList<T>(): NetworkPromiseResponse<T> {
  return new Promise((resolve, reject) => {
    apisauces.get(ENDPOINTS.GET_MARKETS_LIST)
      .then((res) => {
        if (res.ok) {
          return resolve(res.data as any)
        }
        reject(res.data);
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const apis = {
  login,
  getMarketHeader,
  getMarketsList
}