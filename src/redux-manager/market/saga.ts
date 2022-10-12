import allActions from "redux-manager/allActions";
import { CommonFetchParamsModel, RequestErrorModel } from "redux-manager/commonType";
import { put, takeLatest } from 'redux-saga/effects';
import { apis } from "utils/services/apis";
import { GetMarketHeaderSuccessModel, GetMarketsListSuccessModel, marketActionTypes } from "./action";

export interface LoginParams {
    email: string;
    password: string;
    captcha?: string;
    captchaBypass?: string;
}

export function* getMarketHeaderRequest(data: CommonFetchParamsModel) {
    const { callBack } = data;
    try {
        const response: GetMarketHeaderSuccessModel = yield apis.getMarketHeader();
        yield put(allActions.market.getMarketHeaderSuccess(response));

        callBack && callBack({
            data: response.data,
            error: undefined,
        });
    } catch (error) {
        callBack && callBack({
            data: undefined,
            error: error as RequestErrorModel,
        })
        yield put(allActions.market.getMarketHeaderError(error as RequestErrorModel))
    }
}

export function* getMarketsListRequest(data: CommonFetchParamsModel) {
    const { callBack } = data;
    try {
        const response: GetMarketsListSuccessModel = yield apis.getMarketsList();
        yield put(allActions.market.getMarketsListSuccess(response));

        callBack && callBack({
            data: response.data,
            error: undefined,
        });
    } catch (error) {
        callBack && callBack({
            data: undefined,
            error: error as RequestErrorModel,
        })
        yield put(allActions.market.getMarketsListError(error as RequestErrorModel))
    }
}

export function* watchMarketRequest() {
    // @ts-ignore
    yield takeLatest(marketActionTypes.GET_MARKET_HEADER_REQUEST, getMarketHeaderRequest);
    // @ts-ignore
    yield takeLatest(marketActionTypes.GET_MARKETS_LIST_REQUEST, getMarketsListRequest);
}