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

export const loginRequest = (loginRequestData: LoginRequestModel) => {
    return {
        type: authActionTypes.LOGIN_REQUEST,
        payload: loginRequestData.payload,
        callBack: loginRequestData.callBack
    }
}

export const loginSuccess = (loginSuccessData: LoginSuccessModel) => {
    // console.log({loginSuccessData})
    return {
        type: authActionTypes.LOGIN_SUCCESS,
        response: loginSuccessData,
        callBack: loginSuccessData.callBack
    }
}

export const loginError = (error: RequestErrorModel) => {
    return {
        type: authActionTypes.LOGIN_ERROR,
        response: error,
    }
}
