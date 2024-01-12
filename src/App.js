
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Main from './components/HomePage/Main';
import SeatSelection from './components/SeatSelection/SeatSelection';
import PassengersInfo from './components/Passengers/Passengers';
import Payment from './components/Payment/Payment';
import CheckOrder from './components/CheckOrder/CheckOrder';
import SuccessfulOrder from './components/SuccessfulOrder/SuccessfulOrder';
import './App.css';

import Footer from './components/Footer/Footer';
import ChooseTrains from './components/ChooseTrains/ChooseTrains';

function App() {
  return (
    <>
      <div className='case'>
        {/* <div className='jumbotron_bannerr'></div> */}
        <Router> 
            <Header />
              <Routes>
                <Route path="/" element={<Main />}/>
                <Route path='/trains' element={<ChooseTrains/>}/>
                <Route path='/trains/:id' element={<SeatSelection />}/>
                <Route path='/passengers' element={<PassengersInfo/>} />
                <Route path='/payment' element={<Payment/>} />
                <Route path='/checkorder' element={<CheckOrder/>} />
                <Route path='/result' element={<SuccessfulOrder/>} />
              </Routes>
              <Footer />
        </Router>  
      </div> 
    </>
  );
}

export default App;
