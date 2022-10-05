import { CommonFetchParams, RequestErrors } from "redux-manager/commonType";
import { authActionTypes } from "./action";

export interface Profile {
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
};

interface InitialStates extends CommonFetchParams {
    profile: Profile;
};

export interface Actions extends CommonFetchParams {
    type: string;
};

const initialState: InitialStates = {
    profile: {} as Profile,
    isRequesting: false,
    requestError: {} as RequestErrors,
};

export const auth = (
    state = initialState,
    action: Actions = {type: '', response: undefined}
) => {
    switch (action.type) {
        case authActionTypes.LOGIN_REQUEST:
            console.log('LOGIN_REQUEST....')
            return {
                ...state,
                isRequesting: true,
            }
        case authActionTypes.LOGIN_SUCCESS:
            console.log('LOGIN_SUCCESS....')

            return {
                ...state,
                profile: action.response as Profile,
                isRequesting: false,
            }
        case authActionTypes.LOGIN_ERROR:
            console.log('LOGIN_ERROR....')
            return {
                ...state,
                isRequesting: false,
                requestError: action.response as RequestErrors,
            }
        default:
            return state;
    }
}