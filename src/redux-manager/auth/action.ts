import { CommonFetchParams, RequestErrors } from "redux-manager/commonType";
import { LoginRequest } from "./saga";

export const authActionTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_ERROR: 'LOGIN_ERROR'
}

export interface LoginSuccess extends CommonFetchParams {
    response: any;
}

export const loginRequest = (data: LoginRequest) => {
    return {
        type: authActionTypes.LOGIN_REQUEST,
        payload: data.payload,
        callBack: data.callBack
    }
}

export const loginSuccess = (data: LoginSuccess) => {
    return {
        type: authActionTypes.LOGIN_SUCCESS,
        response: data.response,
        callBack: data.callBack
    }
}

export const loginError = (error: RequestErrors) => {
    return {
        type: authActionTypes.LOGIN_ERROR,
        response: error,
    }
}
