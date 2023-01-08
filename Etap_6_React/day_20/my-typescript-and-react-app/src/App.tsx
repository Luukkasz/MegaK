import React from 'react';
import {GiftsView} from "./views/GiftsView";
import { Route, Routes} from "react-router-dom";
import {Header} from "./components/Header/Header";
import {NotFoundView} from "./views/NotFoundView";

function App() {
  return (
      <>
          <Header />
          <Routes>
              <Route path="/gift" element={<GiftsView/>} />
              <Route path="*" element={<NotFoundView/>} />
          </Routes>
      </>
  );
}

export default App;
