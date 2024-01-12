import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cityFrom: '',
    cityFromId: '',
    cityTo: '',
    cityToId: '',
    citiesFromList: [],
    citiesToList: [],
    dateStartThere: '',
    dateBackTo: '',
    loadingCitiesFrom: false,
    errorCitiesFrom: null,
    loadingCitiesTo: false,
    errorCitiesTo: null,
    form: {
        'from_city_id': '',
        'to_city_id': '',
        'date_start': '',
        'date_end': '',
        'sort': 'date',
        'limit': 5,
        'offset': 0,
        'price_min': 500,
    },
    trainsList: [],
    loadingTrainsList: false,
    errorTrainsList: null,
    loadingLastRoutes: false,
    errorLastRoutes: null,
    lastRoutes: [],
    trainId: null,
    trainIdBack: null,
    loadingTrainSeats: false,
    loadingTrainSeatsBack: false,
    errorTrainSeats: null,
    errorTrainSeatsBack: null,
    trainSeats: [],
    trainSeatsBack: [],
    selectedTrain: []
}

export const trainSlice = createSlice({
    name: 'train',
    initialState,
    reducers: {

        //города Из списка Запросить
        citiesFromListRequest: (state, action) => {
            state.loadingCitiesFrom = true;
            state.errorCitiesFrom = false;
            !action.payload ? state.citiesFromList = [] : state.cityFrom = action.payload;
            state.cityFromId = '';
        },

        citiesItemThere: (state, action) => {
            state.loadingCitiesFrom = true;
            state.errorCitiesFrom = false;
            state.cityFrom = action.payload;
            state.cityFromId = '';
        },

        citiesItemThereId: (state, action) => {
            state.loadingCitiesFrom = true;
            state.errorCitiesFrom = false;
            state.cityFromId  = action.payload;
        },

        citiesItemThereTo: (state, action) => {
            state.loadingCitiesFrom = true;
            state.errorCitiesFrom = false;
            state.cityFromId  = action.payload;
        },

        citiesItemTo: (state, action) => {
            state.loadingCitiesFrom = true;
            state.errorCitiesFrom = false;
            state.cityTo = action.payload;
            state.cityFromId = '';
        },


        citiesFromListFailure: (state, action) => {
            state.loadingCitiesFrom = false;
            state.errorCitiesFrom = action.payload;
        },
        //города Из списка Успех
        citiesFromListSuccess: (state, action) => {
            state.citiesFromList = action.payload;
            if (action.payload[0].name === state.cityFrom) {
                state.cityFromId = action.payload[0]._id;
                state.citiesFromList = [];
            }
            state.loadingCitiesFrom = false;
            state.errorCitiesFrom = null;
        },
        citiesToListRequest: (state, action) => {
            state.loadingCitiesTo = true;
            state.errorCitiesTo = false;
            !action.payload ? state.citiesToList = [] : state.cityTo = action.payload;
            state.cityToId = '';
        },
        citiesToListFailure: (state, action) => {
            state.loadingCitiesTo = false;
            state.errorCitiesTo = action.payload;
        },
        citiesToListSuccess: (state, action) => {
            state.citiesToList = action.payload;
            state.loadingCitiesTo = false;
            state.errorCitiesTo = null;
            if (action.payload[0].name === state.cityTo) {
                state.cityToId = action.payload[0]._id;
                state.citiesToList = [];
            }
        },
//////////////cityFrom
        departureDay: (state, action) => {
            state.dateStartThere = action.payload;
        },

        returnDay: (state, action) => {
            state.dateBackTo = action.payload;
        },
///////////////
        trainsListRequest: (state, action) => {
            state.form = action.payload;
            if (state.form.sort === 'price') {
                delete state.form["sort"]
            }
            state.loadingTrainsList = true;
            state.errorTrainsList = false;
        },
        trainsListFailure: (state, action) => {
            state.loadingTrainsList = false;
            state.errorTrainsList = action.payload;
        },
        trainsListSuccess: (state, action) => {
            state.trainsList = action.payload;
            state.loadingTrainsList = false;
            state.errorTrainsList = null;
        },
        //последний запрос маршрутов
        lastRoutesRequest: (state) => {
            state.loadingLastRoutes = true;
            state.errorLastRoutes = false;
        },
        lastRoutesFailure: (state, action) => {
            state.loadingLastRoutes = false;
            state.errorLastRoutes = action.payload;
        },
        lastRoutesSuccess: (state, action) => {
            state.lastRoutes = action.payload;
            state.loadingLastRoutes = false;
            state.errorLastRoutes = null;
        },

        //сортировкаПоезда
        sortTrains: (state, action) => {
            state.form = action.payload;
        },
        //поездМестаЗапрос
        trainSeatsRequest: (state, action) => {
            state.trainId = action.payload;
            state.loadingTrainSeats = true;
            state.errorTrainSeats = false;
        }, 
        trainSeatsFailure: (state, action) => {
            state.loadingTrainSeats = false;
            state.errorTrainSeats = action.payload;
        },
        trainSeatsSuccess: (state, action) => {
            state.trainSeats = action.payload;
            state.loadingTrainSeats = false;
            state.errorTrainSeats = null;
        },
        trainSeatsBackRequest: (state, action) => {
            state.trainIdBack = action.payload;
            state.loadingTrainSeatsBack = true;
            state.errorTrainSeatsBack = false;
        },
        trainSeatsBackFailure: (state, action) => {
            state.loadingTrainSeatsBack = false;
            state.errorTrainSeatsBack = action.payload;
        },
        trainSeatsBackSuccess: (state, action) => {
            state.trainSeatsBack = action.payload;
            state.loadingTrainSeatsBack = false;
            state.errorTrainSeatsBack = null;
        },
        //выберитеПоезд
        selectTrain: (state, action) => {
            state.selectedTrain = action.payload;
        }
    }
})

export const { 
    citiesFromListRequest,
    citiesFromListFailure,
    citiesFromListSuccess,
    citiesToListFailure,
    citiesToListRequest,
    citiesToListSuccess,
    trainsListRequest,
    trainsListFailure,
    trainsListSuccess,
    lastRoutesRequest,
    lastRoutesFailure,
    lastRoutesSuccess,
    sortTrains,
    trainSeatsRequest,
    trainSeatsFailure,
    trainSeatsSuccess,
    trainSeatsBackFailure,
    trainSeatsBackRequest,
    trainSeatsBackSuccess,
    selectTrain, 
    departureDay,
    returnDay,
    citiesItemThere,
    citiesItemTo,
    citiesItemThereId,
    citiesItemThereTo,

    } = trainSlice.actions;

export default trainSlice.reducer;
