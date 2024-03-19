import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RealTimeWeather, Settings, ForecastWeather } from "./screens";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/Store"; // Import both store and persistor
import { PersistGate } from "redux-persist/integration/react"; // Import PersistGate

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/" element={<RealTimeWeather />} />
              <Route path="/forecast" element={<ForecastWeather />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
