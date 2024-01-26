import React from 'react';
import Map from '../components/map';
import DataMap from '../components/datamap';
import DataCharts from '../components/datacharts/Manglore';
import { useState } from 'react';
import Dropdown from '../components/dropdown';

const Manglore = () => {
  const [selected, setSelected] = useState('Choose One');
  return (
    <div>
      {/* Semantic has been implemented in the Map components */}
      <Dropdown selected={selected} setSelected={setSelected} />
      <Map
        latitude={12.927278}
        longitude={74.812275}
        url="https://learngis2.maps.arcgis.com/apps/instant/basic/index.html?appid=a495b28d602f42bea31fe221266d8b8e"
        href="https://raw.githubusercontent.com/anujgoenka9/Port-Data/main/manglore.csv"
        path="manglore"
      />
      {/* <DataMap map_url="https://mumbai-kepler.netlify.app/" /> */}
      <DataMap map_url="https://steady-kitsune-c601b8.netlify.app/" />
      <DataCharts />
    </div>
  );
};

export default Manglore;
