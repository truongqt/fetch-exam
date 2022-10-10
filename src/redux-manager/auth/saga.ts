import { authActionTypes, LoginSuccessModel } from "./action";
import { cancel, put, take, takeLatest } from 'redux-saga/effects';
import { CommonFetchParamsModel, RequestErrorModel } from "redux-manager/commonType";
import { apis, apisauces } from "utils/services/apis";
import allActions from "redux-manager/allActions";
import { ProfileModel } from "./reducer";

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
    console.log('loginRequest datapayload: ', JSON.stringify(payload));
    const loginBody: LoginParams = {
        ...payload,
        captcha: "yWOEjZMIhY",
        captchaBypass: "yWOEjZMIhY",
    }
    try {
        const response: LoginSuccessModel = yield apis.login(loginBody);
        console.log('saga success: ', JSON.stringify(response))
        apisauces.setHeader("Authorization", `Bearer ${response.data.token}`)
        yield put(allActions.auth.loginSuccess(response));

        callBack && callBack({
            data: response,
            error: undefined,
        });
    } catch (error) {
        console.log('saga error: ', JSON.stringify(error))
        callBack && callBack({
            data: undefined,
            error: error as RequestErrorModel,
        })
        yield put(allActions.auth.loginError(error as RequestErrorModel))
    }
}

export function* watchLoginRequest() {
    while (true) {
        // @ts-ignore
        const watcher = yield takeLatest(authActionTypes.LOGIN_REQUEST, loginRequest);
        // yield take('LOGOUT');
        yield cancel(watcher);
    }
}