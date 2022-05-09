import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';
import authReducer from 'features/auth/authSlice';
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
    },
    // devTools:false,// no use devtool extension

    // middleware: (getDefaultMiddleware) =>
    //     getDefaultMiddleware({
    //         thunk: true,
    //         // defaul true
    //         // serializableCheck: false,
    //         // immutableCheck: false,
    //     }),
    //add saga in middleware
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
// run saga
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
