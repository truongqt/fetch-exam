import { GetMarketHeaderSuccessModel, marketActionTypes } from "./action";
import { cancel, put, take, takeLatest } from 'redux-saga/effects';
import { CommonFetchParamsModel, RequestErrorModel } from "redux-manager/commonType";
import { apis, apisauces } from "utils/services/apis";
import allActions from "redux-manager/allActions";

export interface LoginParams {
    email: string;
    password: string;
    captcha?: string;
    captchaBypass?: string;
}
export interface GetMarketHeaderRequestModel extends CommonFetchParamsModel {
};

export function* getMarketHeaderRequest(data: GetMarketHeaderRequestModel) {
    const { callBack } = data;
    console.log('loginRequest saga...');
    try {
        const response: GetMarketHeaderSuccessModel = yield apis.getMarketHeader();
        // console.log('saga getMarketHeaderRequest success: ', JSON.stringify(response))
        yield put(allActions.market.getMarketHeaderSuccess({
            response: response.data,
        }));

        callBack && callBack({
            data: response.data,
            error: undefined,
        });
    } catch (error) {
        console.log('saga getMarketHeaderRequest error: ', JSON.stringify(error))
        callBack && callBack({
            data: undefined,
            error: error as RequestErrorModel,
        })
        yield put(allActions.market.getMarketHeaderError(error as RequestErrorModel))
    }
}

export function* watchGetMarketHeaderRequest() {
    while (true) {
        // @ts-ignore
        const watcher = yield takeLatest(marketActionTypes.GET_MARKET_HEADER_REQUEST, getMarketHeaderRequest);
        // yield take('LOGOUT');
        yield cancel(watcher);
    }
}