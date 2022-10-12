import { all } from "redux-saga/effects";
import { watchLoginRequest } from "./auth/saga";
import { watchMarketRequest } from "./market/saga";

export default function* rootSaga() {
    yield all([
        watchLoginRequest(),
        watchMarketRequest()
    ])
}