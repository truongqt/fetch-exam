import { CommonFetchParamsModel, RequestErrorModel } from "redux-manager/commonType";
import { commonActionTypes } from "./action";

export interface ErrorPopupModel {
    show: boolean;
    error: RequestErrorModel;
}

interface InitialStates extends CommonFetchParamsModel {
    showLoading: boolean;
    errorPopup: ErrorPopupModel;
};

export interface Actions extends CommonFetchParamsModel {
    type: string;
};

const initialState: InitialStates = {
    showLoading: false,
    errorPopup: {} as ErrorPopupModel
};

export const common = (
    state = initialState,
    action: Actions = { type: '', response: undefined },
) => {
    switch (action.type) {
        case commonActionTypes.SET_SHOW_LOADING:
            return {
                ...state,
                showLoading: action.payload as boolean,
            }
        case commonActionTypes.SET_ERROR_POPUP:
            return {
                ...state,
                errorPopup: action.payload as ErrorPopupModel,
            }
        default:
            return state;
    }
}