import { create, DEFAULT_HEADERS } from 'apisauce';
import { LoginParams, LoginRequestModel } from 'redux-manager/auth/saga';
import { BASE_URL, ENDPOINTS } from 'utils/helpers/constants';

export const apisauces = create({
  baseURL: BASE_URL,
  headers: DEFAULT_HEADERS,
  timeout: 3000,
});

type NetworkPromiseResponse<T> = Promise<T>;

function login<T>(data: LoginParams): NetworkPromiseResponse<T>{
    return new Promise((resolve, reject) => {
        apisauces.post(ENDPOINTS.LOG_IN, data)
        .then((res: any)=>{
            console.log('api res: ', JSON.stringify(res))
            if (!res || (res && res.data?.status === 'error')) {
                return reject(res);
              }
              if (res && res.accessToken) {
                // network.setToken(res.accessToken);
                apisauces.setHeader("Authorization", `Bearer ${res.accessToken}`)
              }
            resolve(res)
        })
        .catch(error=>{
            console.log('api error: ', JSON.stringify(error))
            reject(error)
        })
    })
}

export const apis = {
    login
}