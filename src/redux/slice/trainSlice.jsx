import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cityFrom: '',
    cityFromId: '',
    cityTo: '',
    cityToId: '',
    citiesFromList: [],
    citiesToList: [],
    departureDayHere: '',
    returnDayBack: '',
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
    options: [
        {
            type:'coupe',
            check:false,
        },
        {
            type:'reservedseat',
            check:false,
        },
        {
            type:'seat',
            check:false,
        },
        {
            type:'star',
            check:false,
        },
        {
            type:'wifi',
            check:false,
        },
        {
            type:'express',
            check:false,
        },
    ],
    priceFrom: 1920,
    priceTo: 7000,
    startDepartureHourFrom: 0,
    startDepartureHourTo: 24,
    endDepartureHourFrom: 0,
    endDepartureHourTo: 24,
    startArrivalHourFrom: 0,
    startArrivalHourTo: 24,
    endArrivalHourFrom: 0,
    endArrivalHourTo: 24,
    sort:'sort',
    limit: 5,
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
    selectedTrain: [],
    validForm: false,
    currentCountryPage: [],
    lastRoutesItem: null
}

export const trainSlice = createSlice({
    name: 'train',
    initialState,
    reducers: {
        addLastRoutesItem: (state, action) => {
            state.lastRoutesItem = action.payload;            
        },
        changeValidForm: (state, action) => {
            state.validForm = action.payload;            
        },
        changeCurrentCountryPage: (state, action) => {
            state.currentCountryPage= action.payload;    
        },
        //города Из списка Запросить
        citiesFromListRequest: (state, action) => {
            state.loadingCitiesFrom = true;
            state.errorCitiesFrom = false;
            state.cityFrom = action.payload;
            // !action.payload ? state.citiesFromList = [] : state.cityFrom = action.payload;
            state.cityFromId = '';
        },
        
        citiesToListRequest: (state, action) => {
            state.loadingCitiesTo = true;
            state.errorCitiesTo = false;
            state.cityTo = action.payload;
            // !action.payload ? state.citiesToList = [] : state.cityTo = action.payload;
            state.cityToId = '';
        },

        citiesItemThere: (state, action) => {
            state.loadingCitiesFrom = true;
            state.errorCitiesFrom = false;
            // (action.payload !== state.cityFrom ) ? state.cityFrom = action.payload : state.cityFrom;
            state.cityFrom = action.payload;
            state.cityFromId = '';
        },       
        
        citiesItemTo: (state, action) => {
            state.loadingCitiesTo = true;
            state.errorCitiesTo = false;
            state.cityTo = action.payload;
            state.cityToId = '';
        },

        citiesItemThereId: (state, action) => {
            state.loadingCitiesFrom = true;
            state.errorCitiesFrom = false;
            state.cityFromId  = action.payload;
        },

        citiesItemToId: (state, action) => {
            state.loadingCitiesTo= true;
            state.errorCitiesTo = false;
            state.cityToId  = action.payload;
        },

 


        citiesFromListFailure: (state, action) => {
            state.loadingCitiesFrom = false;
            state.errorCitiesFrom = action.payload;
        },      
        citiesToListFailure: (state, action) => {
            state.loadingCitiesTo = false;
            state.errorCitiesTo = action.payload;
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
            state.departureDayHere = action.payload;
        },

        returnDay: (state, action) => {
            state.returnDayBack = action.payload;
        },

        startDate: (state, action) => {
            state.dateStartThere = action.payload;
        },

        backDay: (state, action) => {
            state.dateBackTo = action.payload;
        },
///////////////
// поиск направления
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

        //последний запрос маршрутов ... вывела
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

        // изменение состояния опций
        changeOptions: (state, action) => {
            const index = state.options.findIndex(item => item.type === action.payload);
            if(index !== -1) {
                state.options[index].check = state.options[index].check === false ? true : false;
            }     
        },
        // цена
        changePriceFrom: (state, action) => {
            state.priceFrom = action.payload;
        },

        changePriceTo: (state, action) => {
            state.priceTo = action.payload;
        },

        //время

        changeStartDepartureFrom:(state, action) => {
            state.startDepartureHourFrom = action.payload;
        },

        changeStartDepartureTo:(state, action) => {
            state.startDepartureHourTo = action.payload;
        },

        changeEndDepartureFrom:(state, action) => {
            state.endDepartureHourFrom = action.payload;
        },

        changeEndDepartureTo:(state, action) => {
            state.endDepartureHourTo = action.payload;
        },

        changeStartArrivalFrom:(state, action) => {
            state.startArrivalHourFrom = action.payload;
        },

        changeStartArrivalTo:(state, action) => {
            state.startArrivalHourTo = action.payload;
        },

        changeEndArrivalFrom:(state, action) => {
            state.endArrivalHourFrom = action.payload;
        },

        changeEndArrivalTo:(state, action) => {
            state.endArrivalHourTo = action.payload;
        },

        // сортитровать по date, price, duration

        selectSortType: (state, action) => {
            state.sort = action.payload;
        },

        selectQuantity: (state, action) => {
            state.limit = action.payload;
        },

        

        //сортировкаПоезда
        sortTrains: (state, action) => {
            state.form = action.payload;
        },

        //поездМестаЗапрос start
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
    //поездМестаЗапрос back
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

        //сохранение выбранного поезда
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
    startDate,
    backDay,
    citiesItemThere,
    citiesItemTo,
    citiesItemThereId,
    citiesItemToId,
    changeOptions,
    changePriceFrom,
    changePriceTo,

  
    changeStartDepartureFrom,
    changeStartDepartureTo,
    changeEndDepartureFrom,
    changeEndDepartureTo,
    changeStartArrivalFrom,
    changeStartArrivalTo,
    changeEndArrivalFrom,
    changeEndArrivalTo,
    selectSortType,
    selectQuantity,
    changeValidForm,
    changeCurrentCountryPage,
    addLastRoutesItem,

    } = trainSlice.actions;

export default trainSlice.reducer;
