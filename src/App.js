import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";
import Home from './Home';
import Address from './Address';
import Thankyou from './Thankyou';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/address" element={<Address />} />
          <Route exact path="/thank-you" element={<Thankyou />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
