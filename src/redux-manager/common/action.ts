import { ErrorPopupModel } from "./reducer";

export const commonActionTypes = {
    SET_SHOW_LOADING: 'SET_SHOW_LOADING',
    SET_ERROR_POPUP: 'SET_ERROR_POPUP',
};

export const setShowLoading = (showLoading: boolean) => {
    return {
        type: commonActionTypes.SET_SHOW_LOADING,
        payload: showLoading,
    }
}

export const setErrorPopup = (errorPopup: ErrorPopupModel) => {
    return {
        type: commonActionTypes.SET_ERROR_POPUP,
        payload: errorPopup,
    }
}