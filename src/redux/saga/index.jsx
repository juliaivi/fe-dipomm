import {put, spawn, takeLatest} from 'redux-saga/effects'
import { getCities, getLast, getRoutes, getSeats, getSubcribe, sendOrder } from "../../api/serverRequests";
import { 
    citiesFromListFailure,
    citiesFromListRequest,
    citiesFromListSuccess,
    citiesToListFailure,
    citiesToListRequest,
    citiesToListSuccess,
    lastRoutesFailure,
    lastRoutesRequest,
    lastRoutesSuccess,
    sortTrains,
    trainSeatsBackFailure,
    trainSeatsBackRequest,
    trainSeatsBackSuccess,
    trainSeatsRequest,
    trainSeatsSuccess,
    trainsListFailure,
    trainsListRequest, 
    trainsListSuccess
} from '../slice/trainSlice';
import { 
    getSubscribeFailure, 
    getSubscribeRequest, 
    getSubscribeSuccess, 
    orderFailure, 
    orderRequest, 
    orderSuccess
} from '../slice/passengersSlice';

//ручка Получить города из саги
// это процесс который заускается в зависимости от выполненого экшена (описание бизнес логики приложения, запроса, работа с браузером api и любые асинхронные действия), работа с асинхронным кодом
function* worckerGetCitiesFromSaga(action) {
    try {
        const data = yield getCities(action.payload);
        yield put(citiesFromListSuccess(data))
    } catch (e) {
        yield put(citiesFromListFailure(e.message))
    }
}
// слежение за экшенами которые срабатывают в приложении и когда происходит изменение экшена, выполняется какое-то определенное действие
//takeLatest - осуществляет вызов только последней вызванной функции
//put - аналог дипатч, диспатчит переданный экшен
// spawn(fn, ...args)​
// То же fork(fn, ...args), но создает отдельную задачу. Отделенная задача остается независимой от своего родителя и действует как задача верхнего уровня. Родитель не будет ждать завершения отсоединенной задачи перед возвратом, и все события, которые могут повлиять на родительскую задачу или отсоединенную задачу, полностью независимы (ошибка, отмена).

function* watchGetCitiesFromSaga() {
    yield takeLatest(citiesFromListRequest, worckerGetCitiesFromSaga)
}

function* handleGetCitiesToSaga(action) {
    try {
        const data = yield getCities(action.payload);
        yield put(citiesToListSuccess(data))
    } catch (e) {
        yield put(citiesToListFailure(e.message))
    }
}

function* watchGetCitiesToSaga() {
    yield takeLatest(citiesToListRequest, handleGetCitiesToSaga)
}
// .Статический Object.entries()метод возвращает массив собственных перечислимых пар ключ-значение свойства со строковым ключом.
function* handleGetTrainsSaga(action) {
    try { 
        const url = Object.entries(action.payload).map(entry => `${entry[0]}=${entry[1]}`).join('&')
        console.log(url)
        const data = yield getRoutes(url);
        console.log(data)
        yield put(trainsListSuccess(data))
    } catch (e) {
        yield put(trainsListFailure(e.message))
    }
}

function* watchGetTrainsSaga(){
    yield takeLatest(trainsListRequest, handleGetTrainsSaga)
}
// ..Получить последние маршруты
function* handleGetLastRoutesSaga() {
    try {
        const data = yield getLast();
        yield put(lastRoutesSuccess(data));
    } catch (e) {
        yield put(lastRoutesFailure(e.message))
    }
}

function* watchGetLastRoutesSaga() {
    yield takeLatest(lastRoutesRequest, handleGetLastRoutesSaga)
}

function* handleSortTrainsSaga(action) {
    try { 
        const url = Object.entries(action.payload).map(entry => `${entry[0]}=${entry[1]}`).join('&')
        const data = yield getRoutes(url);
        yield put(trainsListSuccess(data))
    } catch (e) {
        yield put(trainsListFailure(e.message))
    }
}

function* watchSortTrainsSaga() {
    yield takeLatest(sortTrains, handleSortTrainsSaga)
}


function* handleGetTrainSeatsSaga(action) {
    try {
        const data = yield getSeats(action.payload);
        yield put(trainSeatsSuccess(data))
    } catch (e) {
        yield put(trainsListFailure(e.message));
    }
}

function* watchGetTrainSeatsSaga() {
    yield takeLatest(trainSeatsRequest, handleGetTrainSeatsSaga)
}

function* handleGetTrainSeatsBackSaga(action) {
    try {
        const data = yield getSeats(action.payload);
        yield put(trainSeatsBackSuccess(data))
    } catch (e) {
        yield put(trainSeatsBackFailure(e.message));
    }
}
//  поездСиденьяНазад
function* watchGetTrainSeatsBackSaga() {
    yield takeLatest(trainSeatsBackRequest, handleGetTrainSeatsBackSaga)
}
// Получитьподписку
function* handleGetSubscribeSaga(action) {
    try {
        const data = yield getSubcribe(action.payload);
        yield put(getSubscribeSuccess(data))
    } catch (e) {
        yield put(getSubscribeFailure(e.message))
    }
}

function* watchGetSubscribeSaga() {
    yield takeLatest(getSubscribeRequest, handleGetSubscribeSaga)
}

// Отправить заказ
function* handleSendOrderSaga(action) {
    try {
        const data = yield sendOrder(action.payload)
        yield put(orderSuccess(data))
    } catch (e) {
        yield put(orderFailure(e.message))
    }
}

function* watchSendOrderSaga() {
    yield takeLatest(orderRequest, handleSendOrderSaga)
}

export default function* saga() { 
    yield spawn(watchGetCitiesFromSaga)
    yield spawn(watchGetCitiesToSaga)
    yield spawn(watchGetTrainsSaga)
    yield spawn(watchGetLastRoutesSaga)
    yield spawn(watchSortTrainsSaga)
    yield spawn(watchGetTrainSeatsSaga)
    yield spawn(watchGetTrainSeatsBackSaga)
    yield spawn(watchGetSubscribeSaga)
    yield spawn(watchSendOrderSaga)
}