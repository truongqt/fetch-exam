import { CommonFetchParamsModel, CommonRequestSuccessModel, RequestErrorModel } from "redux-manager/commonType";
import { ProfileModel } from "./reducer";
import { LoginRequestModel } from "./saga";

export const authActionTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_ERROR: 'LOGIN_ERROR'
}

export interface LoginSuccessModel extends CommonFetchParamsModel, CommonRequestSuccessModel {
    data: ProfileModel;
}

export const loginRequest = (data: LoginRequestModel) => {
    return {
        type: authActionTypes.LOGIN_REQUEST,
        payload: data.payload,
        callBack: data.callBack
    }
}

export const loginSuccess = (data: LoginSuccessModel) => {
    return {
        type: authActionTypes.LOGIN_SUCCESS,
        response: data.response,
        callBack: data.callBack
    }
}

export const loginError = (error: RequestErrorModel) => {
    return {
        type: authActionTypes.LOGIN_ERROR,
        response: error,
    }
}
