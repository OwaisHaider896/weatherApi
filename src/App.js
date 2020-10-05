import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import CloudIcon from "@material-ui/icons/Cloud";

export default function App() {
  const API_Key = "222d8e893cd4cb6b4d0f089ca38e00a3";

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [data, setData] = useState({ main: { temp: "" } });

  const click = async () => {
    const response = await axios(`https://cors-anywhere.herokuapp.com/
api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_Key}`);

    setData(response.data);
  };

  return (
    <div className="App">
      <div className="main">
        <CloudIcon />
        <h2>Search Weather </h2>
      </div>
      <input
        type="text"
        className="input_1"
        placeholder="City"
        onChange={(e) => setCity(e.target.value)}
        value={city}
      />
      <input
        type="text"
        className="input_2"
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />

      <button className="btn" onClick={click}>
        Get Weather
      </button>

      <h3>Temperature: {data.main.temp}</h3>
    </div>
  );
}

//api.openweathermap.org/data/2.5/weather?q=London,uk&appid={API key}
