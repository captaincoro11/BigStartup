
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import ConsultingPage from './components/ConsultingPage';
import BookingPage from './components/BookingPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ConsultingPage/>}/>
        <Route path='/booking' element={<BookingPage/>}/>

      </Routes>
    </Router>
   
  );
}

export default App;
