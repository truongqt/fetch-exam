import { all } from "redux-saga/effects";
import { watchLoginRequest } from "./auth/saga";
import { watchGetMarketHeaderRequest } from "./market/saga";

export default function* rootSaga() {
    yield all([
        watchLoginRequest(),
        watchGetMarketHeaderRequest()
    ])
}