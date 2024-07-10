import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  passengersInfo: [],
  personalData: null,
  loading: false,
  success: null,
  error: null,
  email: null,

  seatsThere: [
    {
      type: 'adult',
      count: 0,
    },
    {
      type: 'child',
      count: 0,
    },
    {
      type: 'child_no_eats',
      count: 0,
    },
  ],
  seatsBack: [
    {
      type: 'adult',
      count: 0,
    },
    {
      type: 'child',
      count: 0,
    },
    {
      type: 'child_no_eats',
      count: 0,
    },
  ],
  typeSeatsThere: null,
  typeSeatsBack: null,
  selectedPlacesThere: [],
  selectedPlacesBack: [],
  ticketPricesThere: null,
  ticketPricesBack: null,
  order: null,
  loadingOrder: false,
  errorOrder: null,
  successOrder: null,
};

export const passengersSlice = createSlice({
  name: 'passengers',
  initialState,
  reducers: {
    //установить количество мест
    setCountNoSeatsThere: (state, action) => {
      state.seatsThere[2].count = action.payload;
    },
    setCountNoSeatsBack: (state, action) => {
      state.seatsBack[2].count = action.payload;
    },
    setCountSeatsChildThere: (state, action) => {
      state.seatsThere[1].count = action.payload;
    },
    setCountSeatsChildBack: (state, action) => {
      state.seatsBack[1].count = action.payload;
    },
    setCountSeatsAdultThere: (state, action) => {
      state.seatsThere[0].count = action.payload;
    },
    setCountSeatsAdultBack: (state, action) => {
      state.seatsBack[0].count = action.payload;
    },

    // выбор купе и т.д. - тип
    choicetypeSeatsThere: (state, action) => {
      state.typeSeatsThere = action.payload;
    },

    choicetypeSeatsBack: (state, action) => {
      state.typeSeatsBack = action.payload;
    },

    //записавание мест и удаление
    addSeatThere: (state, action) => {
      // сохраняем состояние
      const { seat_id, vagon_id } = action.payload;

      //ищим совпадени по месту и вагону, если нашел то просто вовращает
      if (
        vagon_id === state.selectedPlacesThere[0]?.vagon_id ||
        state.selectedPlacesThere.length === 0
      ) {
        const indexSeat = state.selectedPlacesThere.findIndex(
          (seat) => seat.seat_id === seat_id && seat.vagon_id === vagon_id,
        );
        // если не нашел записывает данное место, а если нашел удаляет
        if (indexSeat === -1) {
          state.selectedPlacesThere = [
            ...state.selectedPlacesThere,
            action.payload,
          ];
        } else {
          state.selectedPlacesThere.splice(indexSeat, 1);
        }
      } else {
        state.selectedPlacesThere = [action.payload];
      }
    },

    addSeatBack: (state, action) => {
      const { seat_id, vagon_id } = action.payload;
      if (
        vagon_id === state.selectedPlacesBack[0]?.vagon_id ||
        state.selectedPlacesBack.length === 0
      ) {
        const indexSeat = state.selectedPlacesBack.findIndex(
          (seat) => seat.seat_id === seat_id && seat.vagon_id === vagon_id,
        );
        // если не нашел записывает данное место, а если нашел удаляет
        if (indexSeat === -1) {
          state.selectedPlacesBack = [
            ...state.selectedPlacesBack,
            action.payload,
          ];
        } else {
          state.selectedPlacesBack.splice(indexSeat, 1);
        }
      } else {
        state.selectedPlacesBack = [action.payload];
      }
    },

    deleteSeatThere: (state) => {
      state.selectedPlacesThere = [];
    },

    deleteSeatBack: (state) => {
      state.selectedPlacesBack = [];
    },

    //итоговая стоимость
    setTicketPricesThere: (state, action) => {
      state.ticketPricesThere = action.payload;
    },

    setTicketPricesBack: (state, action) => {
      state.ticketPricesBack = action.payload;
    },

    // добаление пасажира
    addPassengers: (state, action) => {
      const { id } = action.payload;
      const index = state.passengersInfo.findIndex((item) => item.id === id);

      if (index === -1) {
        state.passengersInfo = [...state.passengersInfo.concat(action.payload)];
      } else {
        const persons = state.passengersInfo;
        persons[index] = action.payload;
        state.passengersInfo = persons;
      }
    },
    //удаление пасажира
    deletePassenger: (state, action) => {
      const index = state.passengersInfo.findIndex(
        (item) => item.id === action.payload,
      );
      if (index !== -1) {
        const persons = state.passengersInfo;
        persons.splice(index, 1);
        state.passengersInfo = persons;
      }
    },

    //установить Персональные данные
    setPersonalData: (state, action) => {
      state.personalData = action.payload;
    },

    //получить запрос на подписку
    getSubscribeRequest: (state, action) => {
      state.email = action.payload;
      state.loading = true;
    },

    getSubscribeSuccess: (state, action) => {
      state.loading = false;
      state.success = action.payload;
    },

    getSubscribeFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    //успешность заказа
    orderRequest: (state, action) => {
      state.order = action.payload;
      state.loadingOrder = true;
      state.errorOrder = false;
    },

    orderFailure: (state, action) => {
      state.loadingOrder = false;
      state.errorOrder = action.payload;
    },

    orderSuccess: (state, action) => {
      state.successOrder = action.payload;
      state.errorOrder = false;
      state.loadingOrder = false;
      state.seatsThere = [
        {
          type: 'adult',
          count: 0,
          price: 0,
        },
        {
          type: 'child',
          count: 0,
          price: 0,
        },
        {
          type: 'child_no_eats',
          count: 0,
          price: 0,
        },
      ];
      state.seatsBack = [
        {
          type: 'adult',
          count: 0,
          price: 0,
        },
        {
          type: 'child',
          count: 0,
          price: 0,
        },
        {
          type: 'child_no_eats',
          count: 0,
          price: 0,
        },
      ];
      state.passengers = [];
      state.successOrder = null;
      state.passengersInfo = [];
      state.typeSeatsThere = null;
      state.typeSeatsBack = null;
      state.selectedPlacesThere = [];
      state.selectedPlacesBack = [];
      state.ticketPricesBack = null;
    },

    //очистка формы
    orderResult: (state) => {
      state.successOrder = null;
      state.order = null;
      state.ticketPricesThere = null;
      state.personalData = {
        name: '',
        surname: '',
        secondName: '',
        mail: '',
        telephone: '',
        payment: '',
      };
    },
  },
});

export const {
  setCountNoSeatsThere,
  setCountNoSeatsBack,
  setCountSeatsChildThere,
  setCountSeatsChildBack,
  setCountSeatsAdultThere,
  setCountSeatsAdultBack,
  addSeatThere,
  addSeatBack,
  setDataThere,
  setDataBack,
  setTrain,
  addPassengers,
  deletePassenger,
  setPersonalData,
  getSubscribeRequest,
  getSubscribeSuccess,
  getSubscribeFailure,
  orderRequest,
  orderFailure,
  orderSuccess,
  orderResult,
  choicetypeSeatsThere,
  choicetypeSeatsBack,
  setTicketPricesThere,
  setTicketPricesBack,
  deleteSeatThere,
  deleteSeatBack,
} = passengersSlice.actions;

export default passengersSlice.reducer;
