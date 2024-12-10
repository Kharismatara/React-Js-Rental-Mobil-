import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Browser from "./assets/pages/Browser";
import Details from "./assets/pages/Details";
import BookOffice from "./assets/pages/BookOffice";
import CityDetails from "./assets/pages/CityDetails";
import SuccessBooking from "./assets/pages/SuccessBooking";
import CheckBooking from "./assets/pages/CheckBooking";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Browser />} />
        <Route path="/office/:slug" element={<Details />} />
        <Route path="/office/:slug/book" element={<BookOffice />} />
        <Route path="/city/:slug" element={<CityDetails />} />
        <Route path="/success-booking" element={<SuccessBooking />} />
        <Route path="/check-booking" element={<CheckBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
