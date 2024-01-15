import './jumbotron.css';
import TicketSearchForm from './TicketSearchForm';

export default function Jumbotron() {
    
    return (
        <section className="jumbotron">
            <div className='jumbotron__box'>
                <div className='jumbotron__banner'>
                    <div className='jumbotron__info'>     
                        <div className='jumbotron__title__box'>
                            <p className="jumbotron__title">Вся жизнь -</p>
                            <h2 className="jumbotron__title strong">путешествие!</h2>
                        </div>
                        <TicketSearchForm />   
                    </div>
                </div>
            </div> 
        </section>
    )
}