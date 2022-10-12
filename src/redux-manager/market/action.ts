import { CommonFetchParamsModel, CommonRequestSuccessModel, RequestErrorModel } from "redux-manager/commonType";
import { MarketHeaderItemModel } from "./reducer";

export const marketActionTypes = {
    GET_MARKET_HEADER_REQUEST: 'GET_MARKET_HEADER_REQUEST',
    GET_MARKET_HEADER_SUCCESS: 'GET_MARKET_HEADER_SUCCESS',
    GET_MARKET_HEADER_ERROR: 'GET_MARKET_HEADER_ERROR',

    GET_MARKETS_LIST_REQUEST: 'GET_MARKETS_LIST_REQUEST',
    GET_MARKETS_LIST_SUCCESS: 'GET_MARKETS_LIST_SUCCESS',
    GET_MARKETS_LIST_ERROR: 'GET_MARKETS_LIST_ERROR'
}

export interface GetMarketHeaderSuccessModel extends CommonFetchParamsModel, CommonRequestSuccessModel {
    data?: MarketHeaderItemModel[];
}

export interface GetMarketsListSuccessModel extends CommonFetchParamsModel, CommonRequestSuccessModel {
    data?: MarketHeaderItemModel[];
}

export const getMarketHeaderRequest = (getMarketHeaderRequestData: CommonFetchParamsModel) => {
    return {
        type: marketActionTypes.GET_MARKET_HEADER_REQUEST,
        callBack: getMarketHeaderRequestData.callBack
    }
}

export const getMarketHeaderSuccess = (getMarketHeaderSuccessResponse: GetMarketHeaderSuccessModel) => {
    return {
        type: marketActionTypes.GET_MARKET_HEADER_SUCCESS,
        response: getMarketHeaderSuccessResponse,
    }
}

export const getMarketHeaderError = (error: RequestErrorModel) => {
    return {
        type: marketActionTypes.GET_MARKET_HEADER_ERROR,
        response: error,
    }
}

export const getMarketsListRequest = (getMarketsListRequestData: CommonFetchParamsModel) => {
    return {
        type: marketActionTypes.GET_MARKETS_LIST_REQUEST,
        callBack: getMarketsListRequestData.callBack
    }
}

export const getMarketsListSuccess = (getMarketsListSuccessResponse: GetMarketsListSuccessModel) => {
    return {
        type: marketActionTypes.GET_MARKETS_LIST_SUCCESS,
        response: getMarketsListSuccessResponse,
    }
}

export const getMarketsListError = (error: RequestErrorModel) => {
    return {
        type: marketActionTypes.GET_MARKETS_LIST_ERROR,
        response: error,
    }
}