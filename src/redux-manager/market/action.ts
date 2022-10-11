import { CommonFetchParamsModel, CommonRequestSuccessModel, RequestErrorModel } from "redux-manager/commonType";
import { GetMarketHeaderRequestModel } from "./saga";

export const marketActionTypes = {
    GET_MARKET_HEADER_REQUEST: 'GET_MARKET_HEADER_REQUEST',
    GET_MARKET_HEADER_SUCCESS: 'GET_MARKET_HEADER_SUCCESS',
    GET_MARKET_HEADER_ERROR: 'GET_MARKET_HEADER_ERROR'
}

export interface GetMarketHeaderSuccessModel extends CommonFetchParamsModel, CommonRequestSuccessModel {
    data?: any;
}

export const getMarketHeaderRequest = (getMarketHeaderRequestData: GetMarketHeaderRequestModel) => {
    return {
        type: marketActionTypes.GET_MARKET_HEADER_REQUEST,
        callBack: getMarketHeaderRequestData.callBack
    }
}

export const getMarketHeaderSuccess = (getMarketHeaderSuccessData: GetMarketHeaderSuccessModel) => {
    // console.log('aaaa: ', JSON.stringify(data))
    return {
        type: marketActionTypes.GET_MARKET_HEADER_SUCCESS,
        response: getMarketHeaderSuccessData,
    }
}

export const getMarketHeaderError = (error: RequestErrorModel) => {
    return {
        type: marketActionTypes.GET_MARKET_HEADER_ERROR,
        response: error,
    }
}
