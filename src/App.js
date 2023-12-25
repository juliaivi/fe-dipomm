
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Main from './components/HomePage/Main';
import SeatSelection from './components/SeatSelection/SeatSelection';

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
                <Route path='trains/:id' element={<SeatSelection />}/>
              </Routes>
              <Footer />
        </Router>  
      </div> 
    </>
  );
}

export default App;
