import { authActionTypes } from "./action";
import { cancel, put, take, takeLatest } from 'redux-saga/effects';
import { CommonFetchParams } from "redux-manager/commonType";


export interface LoginRequest extends CommonFetchParams {
    payload: {
        email: string;
        password: string;
    }
};

export function* loginRequest(data: LoginRequest) {
    console.log('loginRequest....')
    const { email, password } = data.payload;
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
        yield takeLatest(authActionTypes.LOGIN_REQUEST, loginRequest);
    }
}