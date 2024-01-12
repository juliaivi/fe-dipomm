import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allSeats: {
        departure: [],
        arrival: []
    },
    totalPrice: 0,
    totalPriceBack: 0,
    passengers: [],
    personalData: {
        name: '',
        surname: '',
        secondName: '',
        mail: '',
        telephone: '',
        payment: '' 
    },
    email: '',
    loading: false,
    success: null,
    error: null,
    train: {},
    seatsThere: [
    {
        type: 'adult',
        count: 0,
        seats: [],
        price: 0
    },
    {
        type: 'child',
        count: 0,
        seats: [],
        price: 0,
    },
    {
        type: 'child_no_eats',
        count: 0,
        seats: [],
        price: 0
    }
   ],
   seatsBack: [
    {
        type: 'adult',
        count: 0,
        seats: [],
        price: 0
    },
    {
        type: 'child',
        count: 0,
        seats: [],
        price: 0,
    },
    {
        type: 'child_no_eats',
        count: 0,
        seats: [],
        price: 0
    }
   ],
   order: null,
   loadingOrder: false,
   errorOrder: null,
   successOrder: null
}

export const passengersSlice = createSlice({
    name: 'passengers',
    initialState, 
    reducers: {  
        //установить количество мест без мест
        setCountNoSeatsThere: (state, action) => {
            state.seatsThere[2].count = action.payload;
        },
         //установить количество мест без мест
         setCountNoSeatsBack: (state, action) => {
            state.seatsBack[2].count = action.payload;
        },
         //сидячие места 
        addSeatThere: (state, action) => {
            // сохраняем состояние
            const { data } = action.payload;
            //определяем тип (взрослый или детский) и сохраняем его индекс 
            const index = state.seatsThere.findIndex(item => item.type === data.type);
            // берем всех сидящих
            const selectSeats = state.seatsThere[index].seats;
            //ищим совпадени по месту и вагону, если нашел то просто вовращает
            const indexSeat = state.seatsThere[index].seats.findIndex(seat => {
                if (seat.seat_id === data.seat_id && seat.vagon_id === data.vagon_id) {
                    return seat
                }
            })
            // если не нашел записывает данное место, а если нашел удаляет
            if (indexSeat === -1) {
                selectSeats.push(data);
            } else {
                selectSeats.splice(indexSeat, 1);
            }
            // все старые вносит и перезаписывает те данные которые обновились (место, количество мест, общую стоимость)
            state.seatsThere[index] = {
                ...state.seatsThere[index],
                seats: selectSeats,
                count: selectSeats.length,
                price: selectSeats.map(item => item.price).reduce((sum, current) => Number(sum) + Number(current), 0)
            }
        },
        
        addSeatBack: (state, action) => {
            const { data } = action.payload;
            const index = state.seatsBack.findIndex(item => item.type === data.type);
            const selectSeats = state.seatsBack[index].seats;
            const indexSeat = state.seatsBack[index].seats.findIndex(seat => {
                if (seat.seat_id === data.seat_id && seat.vagon_id === data.vagon_id) {
                    return seat
                }
            })
            if (indexSeat === -1) {
                selectSeats.push(data);
            } else {
                selectSeats.splice(indexSeat, 1);
            }

            state.seatsBack[index] = {
                ...state.seatsBack[index],
                seats: selectSeats,
                count: selectSeats.length,
                price: selectSeats.map(item => item.price).reduce((sum, current) => Number(sum) + Number(current), 0)
            }
        },
// дата отправления
        setDataThere: (state, action) => {
            const { data } = action.payload;
            if (data.seat) {
                const index = state.allSeats.departure.findIndex((item) => {
                    if (item.seat.seat_id === data.seat.seat_id && item.id === data.id) {
                        return item
                    }
                })

                if (index === -1) {
                    state.allSeats.departure = [...state.allSeats.departure.concat(data)];
                } else {
                    const seats = state.allSeats.departure;
                    seats.splice(index, 1)
                    state.allSeats.departure = seats;
                }
            }
            state.totalPrice = state.allSeats.departure.map(item => item.seat.price).reduce((sum, current) => Number(sum) + Number(current), 0);
        },
        //данные поезда
        setTrain: (state, action) => {
            state.train = action.payload;
        },
// дата обратно
        setDataBack: (state, action) => {
            const { data } = action.payload;
            if (data.seat) {
                const index = state.allSeats.arrival.findIndex((item) => {
                    if (item.seat.seat_id === data.seat.seat_id && item.id === data.id) {
                        return item
                    }
                })
                if (index === -1) {
                    state.allSeats.arrival = [...state.allSeats.arrival.concat(data)];
                } else {
                    const seats = state.allSeats.arrival;
                    seats.splice(index, 1)
                    state.allSeats.arrival = seats
                }
            }
            state.totalPriceBack = state.allSeats.arrival.map(item => item.seat.price).reduce((sum, current) => Number(sum) + Number(current), 0);
        },
        // добаление пасажира
        addPassengers: (state, action) => {
            const { data } = action.payload;
            const index = state.passengers.findIndex(item => item.id === data.id);
            if (index === -1) {
                state.passengers = [...state.passengers.concat(data)]
            } else {
                const persons = state.passengers;
                persons.splice(index, 1)
                persons.push(data)
                state.passengers = persons;
            }
        },
        //удаление пасажира
        deletePassenger: (state, action) => {
            const { id } = action.payload;
            const passengers = state.passengers;
            const index = passengers.findIndex(item => item.id === id);
            if (index !== -1) {
                passengers.splice(index, 1);
                state.passengers = passengers;
            }
        },

        //установить Персональные данные
        setPersonalData: (state, action) => {
            const { data } = action.payload;
            state.personalData = data;
        },

        //получить запрос на подписку
        getSubscribeRequest: (state, action) => {
            state.email = action.payload;
            state.loading = true;
        },
        //получить успешную подписку
        getSubscribeSuccess: (state, action) => {
            state.loading = false;
            state.success = action.payload;
        },

        getSubscribeFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        //заказать Запрос
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
                    seats: [],
                    price: 0
                },
                {
                    type: 'child',
                    count: 0,
                    seats: [],
                    price: 0,
                },
                {
                    type: 'child_no_eats',
                    count: 0,
                    seats: [],
                    price: 0
                }
            ]
            state.seatsBack = [
                {
                    type: 'adult',
                    count: 0,
                    seats: [],
                    price: 0
                },
                {
                    type: 'child',
                    count: 0,
                    seats: [],
                    price: 0,
                },
                {
                    type: 'child_no_eats',
                    count: 0,
                    seats: [],
                    price: 0
                }
            ];
            state.allSeats = {
                departure: [],
                arrival: []
            };
            state.passengers = [];
        },
       // результат заказа
        orderResult: (state) => {
            state.successOrder = null;
            state.totalPrice = 0;
            state.totalPriceBack = 0;
            state.personalData ={
                name: '',
                surname: '',
                secondName: '',
                mail: '',
                telephone: '',
                payment: '' 
            };
        }

    }
})

export const {
    setCountNoSeats,
    setCountNoSeatsBack,
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
    orderResult
} = passengersSlice.actions;

export default passengersSlice.reducer;