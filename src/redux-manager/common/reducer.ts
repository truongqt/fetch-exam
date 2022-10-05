import { CommonFetchParams } from "redux-manager/commonType";
import { commonActionTypes } from "./action";

interface InitialStates extends CommonFetchParams {
    showLoading: boolean;
};

export interface Actions extends CommonFetchParams {
    type: string;
};

const initialState: InitialStates = {
    showLoading: false,
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
        default:
            return state;
    }
}