import { all } from "redux-saga/effects";
import { watchLoginRequest } from "./auth/saga";

export default function* rootSaga() {
    yield all([
        watchLoginRequest(),
    ])
}