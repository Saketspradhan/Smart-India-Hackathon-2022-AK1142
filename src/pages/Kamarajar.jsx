import React from 'react';
import Map from '../components/map';
import DataMap from '../components/datamap';
import DataCharts from '../components/datacharts/Kamarajar';
import { useState } from 'react';
import Dropdown from '../components/dropdown';

const Kamarajar = () => {
  const [selected, setSelected] = useState('Choose One');
  return (
    <div>
      {/* Semantic has been implemented in the Map components */}
      <Dropdown selected={selected} setSelected={setSelected} />
      <Map
        latitude={13.252851}
        longitude={80.326744}
        url="https://learngis2.maps.arcgis.com/apps/instant/basic/index.html?appid=904b01dbd5d34902b77a620ee5545516"
        href="https://raw.githubusercontent.com/anujgoenka9/Port-Data/main/kamarajar.csv"
        path="kamarajar"
      />
      {/* <DataMap map_url="https://mumbai-kepler.netlify.app/" /> */}
      <DataMap map_url="https://heartfelt-granita-322a38.netlify.app/" />
      <DataCharts />
    </div>
  );
};

export default Kamarajar;
