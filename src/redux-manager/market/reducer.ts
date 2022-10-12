import { CommonFetchParamsModel, RequestErrorModel } from "redux-manager/commonType";
import { marketActionTypes } from "./action";

export interface MarketHeaderSubListItemModel {
    id: number
    marketId: string
    marketName: string
    baseCurrency: string
    marketCurrency: string
    marketCurrencyLong: string
    ceiling?: string
    floor?: string
    baseIncrement?: string
    quoteIncrement?: string
    baseMinSize?: string
    baseMaxSize?: string
    tradingStatus: string
    listRoles: any
  }

export interface MarketHeaderItemModel {
    list: MarketHeaderSubListItemModel[];
    title: string;
  }

interface InitialStates extends CommonFetchParamsModel {
    marketHeader: MarketHeaderItemModel[];
};

export interface Actions extends CommonFetchParamsModel {
    type: string;
};

const initialState: InitialStates = {
    marketHeader: [] as MarketHeaderItemModel[],
    isRequesting: false,
    requestError: undefined
};

export const market = (
    state = initialState,
    action: Actions = {type: '', response: undefined}
) => {
    switch (action.type) {
        case marketActionTypes.GET_MARKET_HEADER_REQUEST:
            return {
                ...state,
                isRequesting: true,
            }
        case marketActionTypes.GET_MARKET_HEADER_SUCCESS:
            return {
                ...state,
                marketHeader: action.response.data as MarketHeaderItemModel[],
                isRequesting: false,
                requestError: undefined,
            }
        case marketActionTypes.GET_MARKET_HEADER_ERROR:
            return {
                ...state,
                isRequesting: false,
                requestError: action.response as RequestErrorModel,
            }
        default:
            return state;
    }
}