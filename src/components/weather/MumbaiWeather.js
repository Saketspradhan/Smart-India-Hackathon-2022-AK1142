import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import moment from 'moment';
import './NewWeather.css';

const MumbaiWeather = () => {
  const [name, setName] = useState('');
  const [temp, setTemp] = useState(0);
  const [desc, setDesc] = useState('');
  const [icon, setIcon] = useState('');
  const [humid, setHumid] = useState(0);
  const [pressure, setPressure] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [sunrise, setSunrise] = useState(0);
  const [sunset, setSunset] = useState(0);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=19.07609&lon=72.877426&units=metric&appid=5e6325fc7fcf751777a50f7292ca5b4b`;
  useEffect(() => {
    axios.get(url).then((res) => {
      // setData(res.data);
      setName(res.data.name);
      setTemp(res.data.main['temp']);
      setDesc(res.data.weather[0]['main']);
      setIcon(res.data.weather[0]['icon']);
      setHumid(res.data.main['humidity']);
      setPressure(res.data.main['pressure']);
      setSpeed(res.data.wind['speed']);
      setSunrise(res.data.sys['sunrise']);
      setSunset(res.data.sys['sunset']);
    });
  }, []);
  return (
    <div className="main-container">
      <div className="city">
        <h2 className="city-name">
          <span>{name}</span>
          <sup>India</sup>
        </h2>
        <p>Date: {moment().format('LL')}</p>
        <div className="city-temp">
          {temp}
          <sup>&deg;C</sup>
        </div>
        <div className="info">
          <motion.div whileHover={{ scale: 1.2 }}>
            <img
              alt="weather-icon"
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            />
          </motion.div>
          <p>{desc}</p>
          <p>
            Humidity: {humid}% &nbsp; Pressure: {pressure} Pa &nbsp; Wind Speed:{' '}
            {speed}
            m/s
          </p>
          <p>
            Sunrise:{' '}
            {new Date(sunrise * 1000).toLocaleTimeString('en-GB', {
              hour: '2-digit',
              minute: '2-digit',
            })}{' '}
            &nbsp; Sunset:{' '}
            {new Date(sunset * 1000).toLocaleTimeString('en-GB', {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MumbaiWeather;
