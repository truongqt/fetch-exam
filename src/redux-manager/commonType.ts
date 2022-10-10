type ResponseStatus = 'success' | 'error';

export interface RequestErrorModel {
  status?: ResponseStatus;
  message?: string;
}
export interface CommonRequestSuccessModel extends RequestErrorModel {
  data?: any;
}

export type CallBackModel = ({ data, error }: { data?: any, error?: RequestErrorModel }) => void;

export interface CommonFetchParamsModel {
  isRequesting?: boolean;
  isLoadMore?: boolean;
  requestError?: RequestErrorModel;
  callBack?: CallBackModel;
  payload?: any;
  response?: any;
}