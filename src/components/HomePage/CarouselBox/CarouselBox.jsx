import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from './Sliders/Sliders';
import './carouselBox.css';


export default function CarouselBox() {
    return (
        <>
            <section className="carousel">
                <h2 className="carousel__title">Отзывы</h2>
                <Slider />
            </section>
        </> 
    )   
}