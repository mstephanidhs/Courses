import { Outlet, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import BookingPage from './pages/booking-page/BookingPage';
import Homepage from './pages/homepage/Homepage';
import ConfirmBooking from './pages/confirm-booking/ConfirmBooking';

function BasicLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<BasicLayout />}>
        <Route index element={<Homepage />} />
        <Route path='booking'>
          <Route index element={<BookingPage />} />
          <Route path=':bookingId' element={<ConfirmBooking />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
