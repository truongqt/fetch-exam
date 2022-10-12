import { CommonFetchParamsModel, RequestErrorModel } from "redux-manager/commonType";
import { authActionTypes } from "./action";

export interface ProfileModel {
    userId: number;
    canAccessApi: boolean;
    email: string;
    roleId: number;
    roleName: string;
    roleType: string;
    is2Faenabled: number;
    emailNotificationStatus: boolean;
    tkxTrading: boolean;
    userType: string;
    token: string;
    refreshToken: string;
    algoInvited: any;
};

interface InitialStates extends CommonFetchParamsModel {
    profile: ProfileModel;
};

export interface Actions extends CommonFetchParamsModel {
    type: string;
};

const initialState: InitialStates = {
    profile: {} as ProfileModel,
    isRequesting: false,
    requestError: undefined,
};

export const auth = (
    state = initialState,
    action: Actions = { type: '', response: undefined }
) => {
    switch (action.type) {
        case authActionTypes.LOGIN_REQUEST:
            return {
                ...state,
                isRequesting: true,
            }
        case authActionTypes.LOGIN_SUCCESS:

            return {
                ...state,
                profile: action.response.data as ProfileModel,
                isRequesting: false,
                requestError: undefined,
            }
        case authActionTypes.LOGIN_ERROR:
            return {
                ...state,
                isRequesting: false,
                requestError: action.response as RequestErrorModel,
            }
        default:
            return state;
    }
}