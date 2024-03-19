import React from "react";
import { useSelector } from "react-redux";
import WeatherCard from "../components/Weather/WeatherCard";
import { GridLoader } from "react-spinners";
import styles from "./screens.module.css";
import SearchBar from "../components/SearchBar/SearchBar";

const RealTimeWeather = () => {
  const { data, loading, error } = useSelector((state) => state.weather);

  return (
    <div className={styles.container}>
      <h1 className={styles.weatherHeader}>Real-Time Weather</h1>
      <SearchBar />
      {loading ? (
        <GridLoader
          color="#00BFFF"
          size={80}
          css={`
            display: block;
            margin: 0 auto;
          `}
        />
      ) : error ? (
        <p className={styles.errorMessage}>Error: {error}</p>
      ) : (
        <div className={styles.weatherCard}>
          <WeatherCard data={data} />
        </div>
      )}
    </div>
  );
};

export default RealTimeWeather;
