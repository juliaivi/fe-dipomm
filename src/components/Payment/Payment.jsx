import './stylePayment.css';
import MainForm from '../ChooseTrains/MainForm/MainForm';
import TripDetails from '../Passengers/TripDetails/TripDetails';
import PaymentInfo from './PaymentInfo/PaymentInfo';

export default function Payment() {
    return (
        <>
        <main className="main">
            <MainForm />
            <section className="payment__details__box">
                <TripDetails />
                <PaymentInfo />
            </section>
        </main>
        </>
    )
}