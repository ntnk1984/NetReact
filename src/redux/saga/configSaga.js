import React from "react";
import { all } from "redux-saga/effects";
export function* rootSaga() {
    yield all([
        // SignupSaga.signupWatchPostSaga(),

    ]);
}