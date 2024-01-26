import React from 'react';
import Map from '../components/map';
import DataMap from '../components/datamap';
import DataCharts from '../components/datacharts/Nehru';
import { useState } from 'react';
import Dropdown from '../components/dropdown';

const Nehru = () => {
  const [selected, setSelected] = useState('Choose One');
  return (
    <div>
      {/* Semantic has been implemented in the Map components */}
      <Dropdown selected={selected} setSelected={setSelected} />
      <Map
        latitude={18.949915}
        longitude={72.949723}
        url="https://learngis2.maps.arcgis.com/apps/instant/basic/index.html?appid=9ec6d337851c4ca6a178c0cfd578dacc"
        href="https://raw.githubusercontent.com/anujgoenka9/Port-Data/main/jnpt.csv"
        path="nehru"
      />
      <DataMap map_url="https://fabulous-hummingbird-da8872.netlify.app/" />
      <DataCharts />
    </div>
  );
};

export default Nehru;
