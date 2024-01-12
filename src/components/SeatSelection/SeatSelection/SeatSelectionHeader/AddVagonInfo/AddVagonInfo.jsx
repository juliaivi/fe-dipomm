import { useEffect, useState } from 'react';
import './styleVagonInfo.css';
import AddServiceButtons from '../AddServiceButtons/AddServiceButtons';
import VagonPlacesList from './VagonPlacesList/VagonPlacesList';

export default function AddVagonInfo() {
const [toggleState, setToggleState] = useState(0)

const data = [{
    activeTyne:'sedentary',
    object: [{
        type: 'sedentary',
        infoCars: [
            {
                number:'07',
                active: false,
                listPlaces: [
                    {
                        number:1,
                        free:true,
                    },
                    {
                        number:2,
                        free:false,
                    },
                    {
                        number:3,
                        free:true,
                    },
                    {
                        number:4,
                        free:false,
                    },
                    {
                        number:5,
                        free:false,
                    },
                    {
                        number:6,
                        free:false,
                    },
                    {
                        number:7,
                        free:false,
                    },
                    {
                        number:8,
                        free:false,
                    },
                    {
                        number:9,
                        free:false,
                    },
                    {
                        number:10,
                        free:false,
                    },
                    {
                        number:11,
                        free:true,
                    },
                    {
                        number:12,
                        free:false,
                    },
                    {
                        number:13,
                        free:true,
                    },
                    {
                        number:14,
                        free:false,
                    },
                    {
                        number:15,
                        free:true,
                    },
                    {
                        number:16,
                        free:false,
                    },
                    {
                        number:17,
                        free:true,
                    },
                    {
                        number:18,
                        free:true,
                    },
                    {
                        number:19,
                        free:true,
                    },
                    {
                        number:20,
                        free:true,
                    },
                    {
                        number:21,
                        free:false,
                    },
                    {
                        number:22,
                        free:false,
                    },
                    {
                        number:23,
                        free:true,
                    },
                    {
                        number:24,
                        free:false,
                    },
                    {
                        number:25,
                        free:false,
                    },
                    {
                        number:26,
                        free:false,
                    },
                    {
                        number:27,
                        free:false,
                    },
                    {
                        number:28,
                        free:false,
                    },
                    {
                        number:29,
                        free:false,
                    },
                    {
                        number:30,
                        free:false,
                    },
                    {
                        number:31,
                        free:true,
                    },
                    {
                        number:32,
                        free:false,
                    },
                    {
                        number:33,
                        free:true,
                    },
                    {
                        number:34,
                        free:false,
                    },
                    {
                        number:35,
                        free:true,
                    },
                    {
                        number:36,
                        free:false,
                    },
                    {
                        number:37,
                        free:true,
                    },
                    {
                        number:38,
                        free:true,
                    },
                    {
                        number:39,
                        free:true,
                    },
                    {
                        number:40,
                        free:true,
                    },
                    {
                        number:41,
                        free:true,
                    },
                    {
                        number:42,
                        free:true,
                    },
                    {
                        number:43,
                        free:true,
                    },
                    {
                        number:44,
                        free:true,
                    },
                    {
                        number:45,
                        free:true,
                    },
                    {
                        number:46,
                        free:true,
                    },
                    {
                        number:47,
                        free:true,
                    },
                    {
                        number:48,
                        free:true,
                    },           {
                        number:49,
                        free:false,
                    },
                    {
                        number:50,
                        free:false,
                    },
                    {
                        number:51,
                        free:false,
                    },
                    {
                        number:52,
                        free:false,
                    },
                    {
                        number:53,
                        free:true,
                    },
                    {
                        number:54,
                        free:false,
                    },
                    {
                        number:55,
                        free:true,
                    },
                    {
                        number:56,
                        free:false,
                    },
                    {
                        number:57,
                        free:true,
                    },
                    {
                        number:58,
                        free:false,
                    },
                    {
                        number:59,
                        free:true,
                    },
                    {
                        number:60,
                        free:true,
                    },
                    {
                        number:61,
                        free:true,
                    },
                    {
                        number:62,
                        free:true,
                    },
                    ],
                totalPlaces: 15,
                costPlace: 1920,
                additionalServices: [
                    {   type: 'condition',
                        text: 'кондиционер',
                        active:true,
                    },
                    {   type: 'wifi',
                        text: 'Wi-Fi',
                        active:true,
                    },
                    {   type: 'food',
                        text: 'питание',
                        active:true,
                    }
                ],
                numberPeopleWatching: 5,
            }, 
            {
                number:'10',
                active:false,
                totalPlaces: 15,
                costPlace: 1920,
                additionalServices: [
                    {   type: 'condition',
                        text: 'кондиционер',
                        active:true,
                    },
                    {   type: 'wifi',
                        text: 'Wi-Fi',
                        active:true,
                    },
                    {   type: 'food',
                        text: 'питание',
                        active:true,
                    }
                ],
                listPlaces: [
                    {
                        number:1,
                        free:true,
                    },
                    {
                        number:2,
                        free:false,
                    },
                    {
                        number:3,
                        free:true,
                    },
                    {
                        number:4,
                        free:false,
                    },
                    {
                        number:5,
                        free:false,
                    },
                    {
                        number:6,
                        free:false,
                    },
                    {
                        number:7,
                        free:false,
                    },
                    {
                        number:8,
                        free:false,
                    },
                    {
                        number:9,
                        free:false,
                    },
                    {
                        number:10,
                        free:false,
                    },
                    {
                        number:11,
                        free:true,
                    },
                    {
                        number:12,
                        free:false,
                    },
                    {
                        number:13,
                        free:true,
                    },
                    {
                        number:14,
                        free:false,
                    },
                    {
                        number:15,
                        free:true,
                    },
                    {
                        number:16,
                        free:false,
                    },
                    {
                        number:17,
                        free:true,
                    },
                    {
                        number:18,
                        free:true,
                    },
                    {
                        number:19,
                        free:true,
                    },
                    {
                        number:20,
                        free:true,
                    },
                    {
                        number:21,
                        free:false,
                    },
                    {
                        number:22,
                        free:false,
                    },
                    {
                        number:23,
                        free:true,
                    },
                    {
                        number:24,
                        free:false,
                    },
                    {
                        number:25,
                        free:false,
                    },
                    {
                        number:26,
                        free:false,
                    },
                    {
                        number:27,
                        free:false,
                    },
                    {
                        number:28,
                        free:false,
                    },
                    {
                        number:29,
                        free:false,
                    },
                    {
                        number:30,
                        free:false,
                    },
                    {
                        number:31,
                        free:true,
                    },
                    {
                        number:32,
                        free:false,
                    },
                    {
                        number:33,
                        free:true,
                    },
                    {
                        number:34,
                        free:false,
                    },
                    {
                        number:35,
                        free:true,
                    },
                    {
                        number:36,
                        free:false,
                    },
                    {
                        number:37,
                        free:true,
                    },
                    {
                        number:38,
                        free:true,
                    },
                    {
                        number:39,
                        free:true,
                    },
                    {
                        number:40,
                        free:true,
                    },
                    {
                        number:41,
                        free:true,
                    },
                    {
                        number:42,
                        free:true,
                    },
                    {
                        number:43,
                        free:true,
                    },
                    {
                        number:44,
                        free:true,
                    },
                    {
                        number:45,
                        free:true,
                    },
                    {
                        number:46,
                        free:true,
                    },
                    {
                        number:47,
                        free:true,
                    },
                    {
                        number:48,
                        free:true,
                    },          
                     {
                        number:49,
                        free:false,
                    },
                    {
                        number:50,
                        free:false,
                    },
                    {
                        number:51,
                        free:false,
                    },
                    {
                        number:52,
                        free:false,
                    },
                    {
                        number:53,
                        free:true,
                    },
                    {
                        number:54,
                        free:false,
                    },
                    {
                        number:55,
                        free:true,
                    },
                    {
                        number:56,
                        free:false,
                    },
                    {
                        number:57,
                        free:true,
                    },
                    {
                        number:58,
                        free:false,
                    },
                    {
                        number:59,
                        free:true,
                    },
                    {
                        number:60,
                        free:true,
                    },
                    {
                        number:61,
                        free:true,
                    },
                    {
                        number:62,
                        free:true,
                    },
                    ], 
                numberPeopleWatching: 13,
            }
        ],  
    },
    {
        type: 'reserved-seat',
        infoCars: [
            {
                number:'08',
                active: false,
                listPlaces: [
                    {
                        number:1,
                        free:true,
                    },
                    {
                        number:2,
                        free:false,
                    },
                    {
                        number:3,
                        free:true,
                    },
                    {
                        number:4,
                        free:false,
                    },
                    {
                        number:5,
                        free:false,
                    },
                    {
                        number:6,
                        free:false,
                    },
                    {
                        number:7,
                        free:false,
                    },
                    {
                        number:8,
                        free:false,
                    },
                    {
                        number:9,
                        free:false,
                    },
                    {
                        number:10,
                        free:false,
                    },
                    {
                        number:11,
                        free:true,
                    },
                    {
                        number:12,
                        free:false,
                    },
                    {
                        number:13,
                        free:true,
                    },
                    {
                        number:14,
                        free:false,
                    },
                    {
                        number:15,
                        free:true,
                    },
                    {
                        number:16,
                        free:false,
                    },
                    {
                        number:17,
                        free:true,
                    },
                    {
                        number:18,
                        free:true,
                    },
                    {
                        number:19,
                        free:true,
                    },
                    {
                        number:20,
                        free:true,
                    },
                    {
                        number:21,
                        free:false,
                    },
                    {
                        number:22,
                        free:false,
                    },
                    {
                        number:23,
                        free:true,
                    },
                    {
                        number:24,
                        free:false,
                    },
                    {
                        number:25,
                        free:false,
                    },
                    {
                        number:26,
                        free:false,
                    },
                    {
                        number:27,
                        free:false,
                    },
                    {
                        number:28,
                        free:false,
                    },
                    {
                        number:29,
                        free:false,
                    },
                    {
                        number:30,
                        free:false,
                    },
                    {
                        number:31,
                        free:true,
                    },
                    {
                        number:32,
                        free:false,
                    },
                    {
                        number:33,
                        free:true,
                    },
                    {
                        number:34,
                        free:false,
                    },
                    {
                        number:35,
                        free:true,
                    },
                    {
                        number:36,
                        free:false,
                    },
                    {
                        number:37,
                        free:true,
                    },
                    {
                        number:38,
                        free:true,
                    },
                    {
                        number:39,
                        free:true,
                    },
                    {
                        number:40,
                        free:true,
                    },
                    {
                        number:41,
                        free:true,
                    },
                    {
                        number:42,
                        free:true,
                    },
                    {
                        number:43,
                        free:true,
                    },
                    {
                        number:44,
                        free:true,
                    },
                    {
                        number:45,
                        free:true,
                    },
                    {
                        number:46,
                        free:true,
                    },
                    {
                        number:47,
                        free:true,
                    },
                    {
                        number:48,
                        free:true,
                    },
                ],
                totalPlaces: 21,
                topPlaces: 10,
                lowerPlaces: 11,
                topPlacesCost: 2020,
                lowesPlacesCost: 3030,
                additionalServices: [
                    {   type: 'condition',
                        text: 'кондиционер',
                        active:true,
                    },
                    {   type: 'wifi',
                        text: 'Wi-Fi',
                        active:true,
                    },
                    {   type: 'bedding',
                        text: 'белье',
                        active:true,
                    },
                    {   type: 'food',
                        text: 'питание',
                        active:true,
                    }
                ],
                numberPeopleWatching: 13,
            }, 
            {   
                number:'09',
                active: false,
                listPlaces: [
                    {
                        number:1,
                        free:true,
                    },
                    {
                        number:2,
                        free:false,
                    },
                    {
                        number:3,
                        free:true,
                    },
                    {
                        number:4,
                        free:false,
                    },
                    {
                        number:5,
                        free:false,
                    },
                    {
                        number:6,
                        free:false,
                    },
                    {
                        number:7,
                        free:false,
                    },
                    {
                        number:8,
                        free:false,
                    },
                    {
                        number:9,
                        free:false,
                    },
                    {
                        number:10,
                        free:false,
                    },
                    {
                        number:11,
                        free:true,
                    },
                    {
                        number:12,
                        free:false,
                    },
                    {
                        number:13,
                        free:true,
                    },
                    {
                        number:14,
                        free:false,
                    },
                    {
                        number:15,
                        free:true,
                    },
                    {
                        number:16,
                        free:false,
                    },
                    {
                        number:17,
                        free:true,
                    },
                    {
                        number:18,
                        free:true,
                    },
                    {
                        number:19,
                        free:true,
                    },
                    {
                        number:20,
                        free:true,
                    },
                    {
                        number:21,
                        free:false,
                    },
                    {
                        number:22,
                        free:false,
                    },
                    {
                        number:23,
                        free:true,
                    },
                    {
                        number:24,
                        free:false,
                    },
                    {
                        number:25,
                        free:false,
                    },
                    {
                        number:26,
                        free:false,
                    },
                    {
                        number:27,
                        free:false,
                    },
                    {
                        number:28,
                        free:false,
                    },
                    {
                        number:29,
                        free:false,
                    },
                    {
                        number:30,
                        free:false,
                    },
                    {
                        number:31,
                        free:true,
                    },
                    {
                        number:32,
                        free:false,
                    },
                    {
                        number:33,
                        free:true,
                    },
                    {
                        number:34,
                        free:false,
                    },
                    {
                        number:35,
                        free:true,
                    },
                    {
                        number:36,
                        free:false,
                    },
                    {
                        number:37,
                        free:true,
                    },
                    {
                        number:38,
                        free:true,
                    },
                    {
                        number:39,
                        free:true,
                    },
                    {
                        number:40,
                        free:true,
                    },
                    {
                        number:41,
                        free:true,
                    },
                    {
                        number:42,
                        free:true,
                    },
                    {
                        number:43,
                        free:true,
                    },
                    {
                        number:44,
                        free:true,
                    },
                    {
                        number:45,
                        free:true,
                    },
                    {
                        number:46,
                        free:true,
                    },
                    {
                        number:47,
                        free:true,
                    },
                    {
                        number:48,
                        free:true,
                    },
                ],
                totalPlaces: 15,
                topPlaces: 4,
                lowerPlaces: 11,
                topPlacesCost: 1650,
                lowesPlacesCost: 2030,
                additionalServices: [
                    {   type: 'condition',
                        text: 'кондиционер',
                        active:true,
                    },
                    {   type: 'wifi',
                        text: 'Wi-Fi',
                        active:true,
                    },
                    {   type: 'bedding',
                        text: 'белье',
                        active:true,
                    },
                    {   type: 'food',
                        text: 'питание',
                        active:true,
                    }
                ],
                numberPeopleWatching: 5,
            }, 
            {
                number:'10',
                active:false,
                listPlaces: [
                    {
                        number:1,
                        free:true,
                    },
                    {
                        number:2,
                        free:false,
                    },
                    {
                        number:3,
                        free:true,
                    },
                    {
                        number:4,
                        free:false,
                    },
                    {
                        number:5,
                        free:false,
                    },
                    {
                        number:6,
                        free:false,
                    },
                    {
                        number:7,
                        free:false,
                    },
                    {
                        number:8,
                        free:false,
                    },
                    {
                        number:9,
                        free:false,
                    },
                    {
                        number:10,
                        free:false,
                    },
                    {
                        number:11,
                        free:true,
                    },
                    {
                        number:12,
                        free:false,
                    },
                    {
                        number:13,
                        free:true,
                    },
                    {
                        number:14,
                        free:false,
                    },
                    {
                        number:15,
                        free:true,
                    },
                    {
                        number:16,
                        free:false,
                    },
                    {
                        number:17,
                        free:true,
                    },
                    {
                        number:18,
                        free:true,
                    },
                    {
                        number:19,
                        free:true,
                    },
                    {
                        number:20,
                        free:true,
                    },
                    {
                        number:21,
                        free:false,
                    },
                    {
                        number:22,
                        free:false,
                    },
                    {
                        number:23,
                        free:true,
                    },
                    {
                        number:24,
                        free:false,
                    },
                    {
                        number:25,
                        free:false,
                    },
                    {
                        number:26,
                        free:false,
                    },
                    {
                        number:27,
                        free:false,
                    },
                    {
                        number:28,
                        free:false,
                    },
                    {
                        number:29,
                        free:false,
                    },
                    {
                        number:30,
                        free:false,
                    },
                    {
                        number:31,
                        free:true,
                    },
                    {
                        number:32,
                        free:false,
                    },
                    {
                        number:33,
                        free:true,
                    },
                    {
                        number:34,
                        free:false,
                    },
                    {
                        number:35,
                        free:true,
                    },
                    {
                        number:36,
                        free:false,
                    },
                    {
                        number:37,
                        free:true,
                    },
                    {
                        number:38,
                        free:true,
                    },
                    {
                        number:39,
                        free:true,
                    },
                    {
                        number:40,
                        free:true,
                    },
                    {
                        number:41,
                        free:true,
                    },
                    {
                        number:42,
                        free:true,
                    },
                    {
                        number:43,
                        free:true,
                    },
                    {
                        number:44,
                        free:true,
                    },
                    {
                        number:45,
                        free:true,
                    },
                    {
                        number:46,
                        free:true,
                    },
                    {
                        number:47,
                        free:true,
                    },
                    {
                        number:48,
                        free:true,
                    },
                ],
                    totalPlaces: 21,
                    topPlaces: 10,
                    lowerPlaces: 11,
                    topPlacesCost: 2020,
                    lowesPlacesCost: 3030,
                    additionalServices: [
                        {   type: 'condition',
                            text: 'кондиционер',
                            active:true,
                        },
                        {   type: 'wifi',
                            text: 'Wi-Fi',
                            active:true,
                        },
                        {   type: 'bedding',
                            text: 'белье',
                            active:true,
                        },
                        {   type: 'food',
                            text: 'питание',
                            active:true,
                        }
                    ],
                    numberPeopleWatching: 13,
            }
        ],  
    },
    {
        type: 'coupe',
        infoCars: [
            {
                number:'08',
                active: false,
                listPlaces: [
                    {
                        number:1,
                        free:true,
                    },
                    {
                        number:2,
                        free:false,
                    },
                    {
                        number:3,
                        free:true,
                    },
                    {
                        number:4,
                        free:false,
                    },
                    {
                        number:5,
                        free:false,
                    },
                    {
                        number:6,
                        free:false,
                    },
                    {
                        number:7,
                        free:false,
                    },
                    {
                        number:8,
                        free:false,
                    },
                    {
                        number:9,
                        free:false,
                    },
                    {
                        number:10,
                        free:false,
                    },
                    {
                        number:11,
                        free:true,
                    },
                    {
                        number:12,
                        free:false,
                    },
                    {
                        number:13,
                        free:true,
                    },
                    {
                        number:14,
                        free:false,
                    },
                    {
                        number:15,
                        free:true,
                    },
                    {
                        number:16,
                        free:false,
                    },
                    {
                        number:17,
                        free:true,
                    },
                    {
                        number:18,
                        free:true,
                    },
                    {
                        number:19,
                        free:true,
                    },
                    {
                        number:20,
                        free:true,
                    },
                    {
                        number:21,
                        free:false,
                    },
                    {
                        number:22,
                        free:false,
                    },
                    {
                        number:23,
                        free:true,
                    },
                    {
                        number:24,
                        free:false,
                    },
                    {
                        number:25,
                        free:false,
                    },
                    {
                        number:26,
                        free:false,
                    },
                    {
                        number:27,
                        free:false,
                    },
                    {
                        number:28,
                        free:false,
                    },
                    {
                        number:29,
                        free:false,
                    },
                    {
                        number:30,
                        free:false,
                    },
                    {
                        number:31,
                        free:true,
                    },
                    {
                        number:32,
                        free:false,
                    },
                ],
                totalPlaces: 21,
                topPlaces: 10,
                lowerPlaces: 11,
                topPlacesCost: 2020,
                lowesPlacesCost: 3030,
                additionalServices: [
                    {   type: 'condition',
                        text: 'кондиционер',
                        active:true,
                    },
                    {   type: 'wifi',
                        text: 'Wi-Fi',
                        active:true,
                    },
                    {   type: 'bedding',
                        text: 'белье',
                        active:true,
                    },
                    {   type: 'food',
                        text: 'питание',
                        active:true,
                    }
                ],
                numberPeopleWatching: 13,
            }, 
            {   
                number:'09',
                active: false,
                listPlaces: [
                    {
                        number:1,
                        free:true,
                    },
                    {
                        number:2,
                        free:false,
                    },
                    {
                        number:3,
                        free:true,
                    },
                    {
                        number:4,
                        free:false,
                    },
                    {
                        number:5,
                        free:false,
                    },
                    {
                        number:6,
                        free:false,
                    },
                    {
                        number:7,
                        free:false,
                    },
                    {
                        number:8,
                        free:false,
                    },
                    {
                        number:9,
                        free:false,
                    },
                    {
                        number:10,
                        free:false,
                    },
                    {
                        number:11,
                        free:true,
                    },
                    {
                        number:12,
                        free:false,
                    },
                    {
                        number:13,
                        free:true,
                    },
                    {
                        number:14,
                        free:false,
                    },
                    {
                        number:15,
                        free:true,
                    },
                    {
                        number:16,
                        free:false,
                    },
                    {
                        number:17,
                        free:true,
                    },
                    {
                        number:18,
                        free:true,
                    },
                    {
                        number:19,
                        free:true,
                    },
                    {
                        number:20,
                        free:true,
                    },
                    {
                        number:21,
                        free:false,
                    },
                    {
                        number:22,
                        free:false,
                    },
                    {
                        number:23,
                        free:true,
                    },
                    {
                        number:24,
                        free:false,
                    },
                    {
                        number:25,
                        free:false,
                    },
                    {
                        number:26,
                        free:false,
                    },
                    {
                        number:27,
                        free:false,
                    },
                    {
                        number:28,
                        free:false,
                    },
                    {
                        number:29,
                        free:false,
                    },
                    {
                        number:30,
                        free:false,
                    },
                    {
                        number:31,
                        free:true,
                    },
                    {
                        number:32,
                        free:false,
                    },
                ],
                totalPlaces: 15,
                topPlaces: 4,
                lowerPlaces: 11,
                topPlacesCost: 1650,
                lowesPlacesCost: 2030,
                additionalServices: [
                    {   type: 'condition',
                        text: 'кондиционер',
                        active:true,
                    },
                    {   type: 'wifi',
                        text: 'Wi-Fi',
                        active:true,
                    },
                    {   type: 'bedding',
                        text: 'белье',
                        active:true,
                    },
                    {   type: 'food',
                        text: 'питание',
                        active:true,
                    }
                ],
                numberPeopleWatching: 5,
            }, 
            {
                number:'10',
                active:false,
                listPlaces: [
                    {
                        number:1,
                        free:true,
                    },
                    {
                        number:2,
                        free:false,
                    },
                    {
                        number:3,
                        free:true,
                    },
                    {
                        number:4,
                        free:false,
                    },
                    {
                        number:5,
                        free:false,
                    },
                    {
                        number:6,
                        free:false,
                    },
                    {
                        number:7,
                        free:false,
                    },
                    {
                        number:8,
                        free:false,
                    },
                    {
                        number:9,
                        free:false,
                    },
                    {
                        number:10,
                        free:false,
                    },
                    {
                        number:11,
                        free:true,
                    },
                    {
                        number:12,
                        free:false,
                    },
                    {
                        number:13,
                        free:true,
                    },
                    {
                        number:14,
                        free:false,
                    },
                    {
                        number:15,
                        free:true,
                    },
                    {
                        number:16,
                        free:false,
                    },
                    {
                        number:17,
                        free:true,
                    },
                    {
                        number:18,
                        free:true,
                    },
                    {
                        number:19,
                        free:true,
                    },
                    {
                        number:20,
                        free:true,
                    },
                    {
                        number:21,
                        free:false,
                    },
                    {
                        number:22,
                        free:false,
                    },
                    {
                        number:23,
                        free:true,
                    },
                    {
                        number:24,
                        free:false,
                    },
                    {
                        number:25,
                        free:false,
                    },
                    {
                        number:26,
                        free:false,
                    },
                    {
                        number:27,
                        free:false,
                    },
                    {
                        number:28,
                        free:false,
                    },
                    {
                        number:29,
                        free:false,
                    },
                    {
                        number:30,
                        free:false,
                    },
                    {
                        number:31,
                        free:true,
                    },
                    {
                        number:32,
                        free:false,
                    },
                ],
                    totalPlaces: 21,
                    topPlaces: 10,
                    lowerPlaces: 11,
                    topPlacesCost: 2020,
                    lowesPlacesCost: 3030,
                    additionalServices: [
                        {   type: 'condition',
                            text: 'кондиционер',
                            active:true,
                        },
                        {   type: 'wifi',
                            text: 'Wi-Fi',
                            active:true,
                        },
                        {   type: 'bedding',
                            text: 'белье',
                            active:true,
                        },
                        {   type: 'food',
                            text: 'питание',
                            active:true,
                        }
                    ],
                    numberPeopleWatching: 13,
            }
        ],  
    },
    {
        type: 'lux',
        infoCars: [
            {
                number:'08',
                active: false,
                listPlaces: [
                {
                    number:1,
                    free:true,
                },
                {
                    number:2,
                    free:false,
                },
                {
                    number:3,
                    free:true,
                },
                {
                    number:4,
                    free:false,
                },
                {
                    number:5,
                    free:false,
                },
                {
                    number:6,
                    free:false,
                },
                {
                    number:7,
                    free:false,
                },
                {
                    number:8,
                    free:false,
                },
                {
                    number:9,
                    free:false,
                },
                {
                    number:10,
                    free:false,
                },
                {
                    number:11,
                    free:true,
                },
                {
                    number:12,
                    free:false,
                },
                {
                    number:13,
                    free:true,
                },
                {
                    number:14,
                    free:false,
                },
                {
                    number:15,
                    free:true,
                },
                {
                    number:16,
                    free:false,
                },
                ],
                totalPlaces: 21,
                costPlace: 1920,
                additionalServices: [
                    {   type: 'condition',
                        text: 'кондиционер',
                        active:true,
                    },
                    {   type: 'wifi',
                        text: 'Wi-Fi',
                        active:true,
                    },
                    {   type: 'bedding',
                        text: 'белье',
                        active:true,
                    },
                    {   type: 'food',
                        text: 'питание',
                        active:true,
                    }
                ],
                numberPeopleWatching: 13,
            }, 
            {   
                number:'09',
                active: false,
                listPlaces: [
                    {
                        number:1,
                        free:true,
                    },
                    {
                        number:2,
                        free:false,
                    },
                    {
                        number:3,
                        free:true,
                    },
                    {
                        number:4,
                        free:false,
                    },
                    {
                        number:5,
                        free:false,
                    },
                    {
                        number:6,
                        free:false,
                    },
                    {
                        number:7,
                        free:false,
                    },
                    {
                        number:8,
                        free:false,
                    },
                    {
                        number:9,
                        free:false,
                    },
                    {
                        number:10,
                        free:false,
                    },
                    {
                        number:11,
                        free:true,
                    },
                    {
                        number:12,
                        free:false,
                    },
                    {
                        number:13,
                        free:true,
                    },
                    {
                        number:14,
                        free:false,
                    },
                    {
                        number:15,
                        free:true,
                    },
                    {
                        number:16,
                        free:false,
                    },
                    ],
                totalPlaces: 15,
                costPlace: 1920,
                additionalServices: [
                    {   type: 'condition',
                        text: 'кондиционер',
                        active:true,
                    },
                    {   type: 'wifi',
                        text: 'Wi-Fi',
                        active:true,
                    },
                    {   type: 'bedding',
                        text: 'белье',
                        active:true,
                    },
                    {   type: 'food',
                        text: 'питание',
                        active:true,
                    }
                ],
                numberPeopleWatching: 5,
            }, 
            {
                number:'10',
                active:false,
                listPlaces: [
                    {
                        number:1,
                        free:true,
                    },
                    {
                        number:2,
                        free:false,
                    },
                    {
                        number:3,
                        free:true,
                    },
                    {
                        number:4,
                        free:false,
                    },
                    {
                        number:5,
                        free:false,
                    },
                    {
                        number:6,
                        free:false,
                    },
                    {
                        number:7,
                        free:false,
                    },
                    {
                        number:8,
                        free:false,
                    },
                    {
                        number:9,
                        free:false,
                    },
                    {
                        number:10,
                        free:false,
                    },
                    {
                        number:11,
                        free:true,
                    },
                    {
                        number:12,
                        free:false,
                    },
                    {
                        number:13,
                        free:true,
                    },
                    {
                        number:14,
                        free:false,
                    },
                    {
                        number:15,
                        free:true,
                    },
                    {
                        number:16,
                        free:false,
                    },
                    ],
                    totalPlaces: 21,
                    costPlace: 1920,
                    additionalServices: [
                        {   type: 'condition',
                            text: 'кондиционер',
                            active:true,
                        },
                        {   type: 'wifi',
                            text: 'Wi-Fi',
                            active:true,
                        },
                        {   type: 'bedding',
                            text: 'белье',
                            active:true,
                        },
                        {   type: 'food',
                            text: 'питание',
                            active:true,
                        }
                    ],
                    numberPeopleWatching: 13,
            }
        ],  
    },



]

}]

const toggleActive = (e, index) => {
    e.preventDefault()
    console.log(1)
    console.log(index, 'index')
    setToggleState(index)

}

    return (
        <>
                <div className='vagon__info'>
                    <div className='vagon__info__amount'>
                        <span className='vagon__info__title'>Вагоны</span>
                        {data[0].object.map((el) => (
                            (el.type === data[0].activeTyne ) ? 
                            <>
                                {el.infoCars.map((el, index) => {
                                    return (
                                        <button 
                                            key={index} 
                                            className={`btn vagon__info__number  ${(toggleState == index) ? 'vagon__number__active' : '' }`} 
                                            onClick={(e) => toggleActive(e, index)}>
                                                {el.number}
                                        </button>)
                                })}
                            </> : <></>
                        ))}
                       
                    </div>
                    <span className='vagon__info__text'>Нумерация вагонов начинается с головы поезда</span>
                </div>
           
                    {data[0].object.map((el) => (
                            (el.type === data[0].activeTyne ) ? 
                                <>
                                   {el.infoCars.map((item, index) => (
                                    <>
                                    <div key={index} className={`detailed__box ${(toggleState == index) ? 'detailed__box__active' : '' }`}>
                                        <div className={`vagon__info__detailed_box ${el.type}`} >
                                            <div className='vagon__info__detailed'>
                                                <div className='vagon__number'>{item.number}</div>
                                                <div className='vagon__title'>вагон</div>
                                            </div>
                                        
                                            <div className='vagon__seats__amount__block'> 
                                                <div className='vagon__seats__title'>Места <span>{item.totalPlaces}</span> </div>
                                                {(data[0].activeTyne !== 'sedentary') ? 
                                                    <>
                                                        <div className='vagon__seats_upper'>Верхние <span>{item.topPlaces}</span></div>
                                                        <div className='vagon__seats_lower'>Нижние <span>{item.lowerPlaces}</span></div>
                                                    </> : <></>
                                                }
                                            </div>

                                            <div  className='vagon__seats__price__list'>
                                                <div className='vagon__seats__price__title'>Стоимость</div>
                                                {
                                                    (data[0].activeTyne === 'sedentary') ? 
                                                    <>
                                                        <div className='vagon__seats__price_number'>
                                                            {item.costPlace} 
                                                            <span className='vagon__seats__price_sign'>₽</span>
                                                        </div>
                                                    </> :
                                                    <>
                                                        <div className='vagon__seats__price_number'>
                                                            {item.topPlacesCost} <span className='vagon__seats__price_sign'>₽</span>
                                                        </div>
                                                        <div className='vagon__seats__price_number'>
                                                            {item.lowesPlacesCost}<span className='vagon__seats__price_sign'>₽</span>
                                                        </div>
                                                    </>
                                                }
                                   
                                            </div>

                                            <div className='additional__services' > 
                                                <div className='vagon__seats__service__block'>
                                                    <span className='vagon__seats__service__block__title'>Обслуживание</span>
                                                    <span className='vagon__seats__service__block__text'>ФПК</span>
                                                </div>
                                                <AddServiceButtons type={el.type} services={item.additionalServices} />               
                                            </div>
                                        </div>

                                        <div className='info__interest__people'>
                                            <div className='info__interest__people__title'>{item.numberPeopleWatching} человек выбирают места в этом поезде</div>
                                        </div>

                                        <VagonPlacesList type={el.type} listPlaces={item}/>
                                    </div>
                                    </>
                                   ))}
                                   
                                </> : <></>
                        ))
                    }

        </>
    )
}