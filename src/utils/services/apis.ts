import { create, DEFAULT_HEADERS } from 'apisauce';
import { LoginParams, LoginRequestModel } from 'redux-manager/auth/saga';
import { BASE_URL, ENDPOINTS } from 'utils/helpers/constants';

export const apisauces = create({
  baseURL: BASE_URL,
  headers: DEFAULT_HEADERS,
  timeout: 3000,
});

type NetworkPromiseResponse<T> = Promise<T>;

function login<T>(data: LoginParams): NetworkPromiseResponse<T> {

  // apisauces.setHeader("User-Agent", "iosss")
  console.log('login apis...')
  return new Promise((resolve, reject) => {
    apisauces.post(ENDPOINTS.LOG_IN, data)
      .then((res) => {
        // console.log('a: ', JSON.stringify(res.config))
        // console.log('b: ', JSON.stringify(res.data))
        // console.log('c: ', JSON.stringify(res.duration))
        // console.log('c: ', JSON.stringify(res.headers))
        // console.log('d: ', JSON.stringify(res.ok))
        // console.log('e: ', JSON.stringify(res.originalError))
        // console.log('f: ', JSON.stringify(res.problem))
        // console.log('g: ', JSON.stringify(res.status))
        if (res.ok) {
          return resolve(res.data as any)
        }
        console.log('login api not OK')
        return reject(res.data)
      })
      .catch(error => {
        console.log('login api error: ', JSON.stringify(error))
        return reject(error)
      })
  })
}

function getMarketHeader<T>(): NetworkPromiseResponse<T> {
  return new Promise((resolve, reject) => {
    apisauces.get(ENDPOINTS.GET_MARKET_HEADERS)
      .then((res) => {
        // console.log('getMarketHeader api res: ', JSON.stringify(res))
        if (res.ok) {
          return resolve(res.data as any)
        }
        console.log('getMarketHeader api not OK')
        reject(res.data);
      })
      .catch(error => {
        console.log('getMarketHeader api error: ', JSON.stringify(error))
        reject(error)
      })
  })
}

export const apis = {
  login,
  getMarketHeader
}