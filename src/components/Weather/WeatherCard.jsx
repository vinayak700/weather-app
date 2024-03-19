import styles from "./WeatherCard.module.css";

function WeatherCard({ data }) {
  return (
    <div className={styles.weatherCard}>
      <h2 className={styles.location}>{data.location.name}</h2>
      <p className={styles.weatherInfo}>
        Temperature: {data.data.values.temperature}°C
      </p>
      <p className={styles.weatherInfo}>
        Humidity: {data.data.values.humidity}%
      </p>
      <p className={styles.weatherInfo}>
        Wind Speed: {data.data.values.windSpeed} km/h
      </p>
      <p className={styles.weatherInfo}>
        Weather Condition: {getWeatherCondition(data.data.values.weatherCode)}
      </p>
    </div>
  );
}

// Function to get weather condition based on weather code
const getWeatherCondition = (weatherCode) => {
  // You can define mappings of weather codes to conditions here
  switch (weatherCode) {
    case 1001:
      return "Clear Sky";
    default:
      return "Unknown";
  }
};

export default WeatherCard;
