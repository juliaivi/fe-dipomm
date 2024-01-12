import { configureStore } from '@reduxjs/toolkit';


// хранилище

import createSagaMiddleware from 'redux-saga';
import saga from '../saga/index'
import trainReducer from '../slice/trainSlice' // можно экспортированный редьюсер назвать как хочешь
import passengersReducer from '../slice/passengersSlice'

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
      train: trainReducer,
      passengers: passengersReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
    devTools: process.env.NODE_ENV !== "production",
})

sagaMiddleware.run(saga);