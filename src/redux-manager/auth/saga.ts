import { authActionTypes, LoginSuccessModel } from "./action";
import { cancel, put, take, takeLatest } from 'redux-saga/effects';
import { CommonFetchParamsModel, RequestErrorModel } from "redux-manager/commonType";
import { apis } from "utils/services/apis";
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
    const {payload, callBack} = data;

    console.log('loginRequest datapayload: ', JSON.stringify(payload));
    // const { email, password } = data.payload;
    const loginBody: LoginParams = {
        ...payload,
        captcha: "yWOEjZMIhY",
        captchaBypass: "yWOEjZMIhY",
    }
    try {
        const response: LoginSuccessModel = yield apis.login(loginBody);
        yield put(allActions.auth.loginSuccess(response));
        callBack && callBack({
            data: response,
            error: undefined,
        });
    } catch (error ) {
        callBack && callBack({
            data: undefined,
            error: error as RequestErrorModel,
        })
        yield put(allActions.auth.loginError(error as RequestErrorModel))
    }
    // try {
    //   const response: Chat[] = yield apis.getChats(payload);
    //   // console.log('Saga getChatsRequest response: ', JSON.stringify(response))
    //   yield put(allActions.chats.getChatsSuccess({
    //     response,
    //     isLoadMore,
    //   }));
    //   callBack && callBack(undefined, response);
    // } catch (error: any) {
    //   // console.log('Saga getChatsRequest error: ', JSON.stringify(error));
    //   if (error && error.data && callBack) {
    //     callBack(error.data, undefined);
    //   }
    //   yield put(allActions.chats.getChatsError(error?.data));
    // }
}

export function* watchLoginRequest () {
    while(true){
        // @ts-ignore
        const watcher = yield takeLatest(authActionTypes.LOGIN_REQUEST, loginRequest);
        yield take();
        yield cancel(watcher);
    }
}