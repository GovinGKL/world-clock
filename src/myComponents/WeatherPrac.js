import React, { useState, useEffect } from "react";

function WeatherPrac() {
  const [weather, setWeather] = useState({});
  const [searchCity, setSearchCity] = useState("");

  const handletoSubmit = (event) => {
    event.preventDefault();
    getThatApi(searchCity);
  };

  const getThatApi = async (searchCity) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "ae626e2e3fmshaf14c72d9c6fb58p1ca133jsnc5bab184b027",
        "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
      },
    };
    try {
      const url =
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" +
        searchCity;
      const fetching_data = await (await fetch(url, options)).json();
      setWeather(fetching_data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form onSubmit={handletoSubmit}>
        <label>
          City:
          <input
            type="text"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
          />
        </label>
        <button type="submit">search</button>
      </form>

      <p>
        The weather of {searchCity} is {weather.temp}
      </p>
    </>
  );
}

export default WeatherPrac;
