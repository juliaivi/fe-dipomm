import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Sliders/Sliders';
import './carouselBox.css';
import { useEffect } from 'react';


export default function CarouselBox({setProgress}) {

    useEffect(() => {
        setProgress(100);
    }, []);
    return (
        <>
            <section className="carousel" id='reviews'>
                <h2 className="carousel__title">Отзывы</h2>
                <Slider />
            </section>
        </> 
    )   
}