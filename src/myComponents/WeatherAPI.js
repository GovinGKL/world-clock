import React, { useState, useEffect } from "react";

function WeatherAPI() {
  const [weather, setWeather] = useState({}); // weather  data here is an
  const [searchCity, setSearchCity] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    getAPI(searchCity);
  };

  const getAPI = async (searchCity) => {
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
      const fetching = await (await fetch(url, options)).json();
      setWeather(fetching);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          City:
          <input
            type="text"
            value={searchCity}
            onChange={(e) => setSearchCity(e.target.value)}
          />
        </label>
        <button type="submit">Search</button>
      </form>
      {
        <p>
          The weather of {searchCity} is {weather.temp}
        </p>
      }
    </div>
  );
}

export default WeatherAPI;
