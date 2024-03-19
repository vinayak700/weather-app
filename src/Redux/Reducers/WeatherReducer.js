import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_APIKEY;

export const fetchRealTimeWeather = createAsyncThunk(
  "weather/fetchRealTimeWeather",
  async (payload, thunkAPI) => {
    try {
      const { location } = payload;
      const response = await fetch(
        `https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=${API_KEY}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const fetchForecastWeather = createAsyncThunk(
  "weather/fetchForecastWeather",
  async (payload, thunkAPI) => {
    try {
      const { location } = payload;
      const response = await fetch(
        `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${API_KEY}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Use builder callback notation
    builder
      .addCase(fetchRealTimeWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRealTimeWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchRealTimeWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchForecastWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchForecastWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchForecastWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const weatherReducer = weatherSlice.reducer;
export const weatherSelector = (state) => state.weather;
