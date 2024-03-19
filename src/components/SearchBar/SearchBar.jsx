import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchForecastWeather } from "../../Redux/Reducers/WeatherReducer";
import styles from "./SearchBar.module.css";

function SearchBar() {
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    dispatch(fetchForecastWeather({ location }));
    setLocation("");
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Enter location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className={styles.input}
      />
      <button onClick={handleSearch} className={styles.button}>
        Search
      </button>{" "}
      {/* Apply the button style */}
    </div>
  );
}

export default SearchBar;
