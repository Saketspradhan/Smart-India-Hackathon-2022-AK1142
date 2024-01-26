import React, { useEffect } from 'react';
import axios from 'axios';
import Map from '../components/map';
import DataMap from '../components/datamap';
import DataCharts from '../components/datacharts/Mumbai';
import { useState } from 'react';
import Dropdown from '../components/dropdown';

const Mumbai = () => {
  const [selected, setSelected] = useState('Choose One');

  return (
    <div>
      {/* Semantic has been implemented in the Map components */}
      <Dropdown selected={selected} setSelected={setSelected} />
      <Map
        latitude={19.07609}
        longitude={72.877426}
        // url="https://learngis2.maps.arcgis.com/apps/instant/basic/index.html?appid=b3af1e7b46904f35916241297abf6c27"
        path="mumbai"
        href="https://raw.githubusercontent.com/anujgoenka9/Port-Data/main/mumbai.csv"
      />
      <DataMap map_url="https://mumbai-kepler.netlify.app/" />
      <DataCharts />
    </div>
  );
};

export default Mumbai;
