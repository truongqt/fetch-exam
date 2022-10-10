import env from 'react-native-config';

export const BASE_URL = env.BASE_URL;

export const SAVED_USER_PROFILE = 'SAVED_USER_PROFILE';

export const ENDPOINTS = {
    LOG_IN: `/mobile-api/auth/login`,
    GET_MARKET_HEADERS: `/mobile-api/market/getmarkets`,
    GET_MARKET_SUMMARIES: `/public/v1/market/get-summaries`,
}
