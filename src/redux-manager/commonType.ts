export interface RequestErrors {
    statusCode: number;
    error: string;
    message: string;
  }
  
  export type CallBacks = ({data, error}:{data?: any, error?: RequestErrors}) => void;
  
  export interface CommonFetchParams {
    isRequesting?: boolean;
    isLoadMore?: boolean;
    requestError?: RequestErrors;
    callBack?: CallBacks;
    payload?: any;
    response?: any;
  }
  
  export interface CommonSuccessResponse {
    message: string;
  }