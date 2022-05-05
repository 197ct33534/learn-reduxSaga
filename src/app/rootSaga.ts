import { PayloadAction } from '@reduxjs/toolkit';
import { all, takeEvery } from 'redux-saga/effects';
function* helloSaga() {
    console.log('hello');
    yield takeEvery('*', logger);
}
function* logger(action: PayloadAction) {
    console.log('logger', action);
}
export default function* rootSaga() {
    console.log('root saga');
    yield all([helloSaga()]);
}
