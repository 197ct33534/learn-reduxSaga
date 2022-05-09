import { PayloadAction } from '@reduxjs/toolkit';
import { fork, take } from 'redux-saga/effects';
import { LoggingPayload, login, logout } from './authSlice';

function* handleLogin(payload: LoggingPayload) {
    console.log('login');
}
function* handleLogout() {
    console.log('logout');
}
function* watchLoginFlow() {
    while (true) {
        const action: PayloadAction<LoggingPayload> = yield take(login.type);
        yield fork(handleLogin, action.payload);

        yield take(logout.type);
        yield fork(handleLogout);
    }
}
export default function* authSaga() {
    yield fork(watchLoginFlow);
}
