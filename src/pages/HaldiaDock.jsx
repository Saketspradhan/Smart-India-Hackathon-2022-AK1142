import React from 'react';
import Map from '../components/map';
import DataMap from '../components/datamap';
import DataCharts from '../components/datacharts/HaldiaDock';
import { useState } from 'react';
import Dropdown from '../components/dropdown';

const HaldiaDock = () => {
  const [selected, setSelected] = useState('Choose One');
  return (
    <div>
      {/* Semantic has been implemented in the Map components */}
      <Dropdown selected={selected} setSelected={setSelected} />
      <Map
        latitude={22.0447}
        longitude={88.0888}
        url="https://learngis2.maps.arcgis.com/apps/instant/basic/index.html?appid=a0a6dfb72a7d43edb85e5246ad12528f"
        href="https://raw.githubusercontent.com/anujgoenka9/Port-Data/main/kolkata.csv"
        path="haldia"
      />
      {/* <DataMap map_url="https://mumbai-kepler.netlify.app/" /> */}
      <DataMap map_url="https://wonderful-concha-49d307.netlify.app/" />
      <DataCharts />
    </div>
  );
};

export default HaldiaDock;
