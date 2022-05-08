import { PayloadAction } from '@reduxjs/toolkit';
import { delay, put, takeEvery } from 'redux-saga/effects';
import { addCaseSagaLoading, addCaseSagaSuccess } from './counterSlice';
function* handleIncrementSaga(action: PayloadAction<number>) {
    console.log('wait 1s');
    yield delay(1000);
    console.log('wait done, dispatch action', action.payload);
    yield put(addCaseSagaSuccess(action.payload));
}
export default function* counterSaga() {
    console.log('counter saga');
    yield takeEvery(addCaseSagaLoading.toString(), handleIncrementSaga);
}
