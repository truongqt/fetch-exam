import allActions from "redux-manager/allActions";
import { CommonFetchParamsModel, RequestErrorModel } from "redux-manager/commonType";
import { put, takeLatest } from 'redux-saga/effects';
import { apis, apisauces } from "utils/services/apis";
import { authActionTypes, LoginSuccessModel } from "./action";

export interface LoginParams {
    email: string;
    password: string;
    captcha?: string;
    captchaBypass?: string;
}
export interface LoginRequestModel extends CommonFetchParamsModel {
    payload: LoginParams;
};

export function* loginRequest(data: LoginRequestModel) {
    const { payload, callBack } = data;
    const loginBody: LoginParams = {
        ...payload,
        captcha: "yWOEjZMIhY",
        captchaBypass: "yWOEjZMIhY",
    }
    try {
        const response: LoginSuccessModel = yield apis.login(loginBody);
        apisauces.setHeader("Authorization", `Bearer ${response.data.token}`)
        yield put(allActions.auth.loginSuccess(response));
        callBack && callBack({
            data: response,
            error: undefined,
        });
    } catch (error) {
        callBack && callBack({
            data: undefined,
            error: error as RequestErrorModel,
        })
        yield put(allActions.auth.loginError(error as RequestErrorModel))
    }
}

export function* watchLoginRequest() {
    // @ts-ignore
    const watcher = yield takeLatest(authActionTypes.LOGIN_REQUEST, loginRequest);
}