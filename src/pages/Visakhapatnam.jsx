import React from 'react';
import Map from '../components/map';
import DataMap from '../components/datamap';
import DataCharts from '../components/datacharts/Visakhapatnam';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Dropdown from '../components/dropdown';

const Visakhapatnam = () => {
  const [selected, setSelected] = useState('Choose One');

  return (
    <div>
      {/* Semantic has been implemented in the Map components */}
      <Dropdown selected={selected} setSelected={setSelected} />
      <Map
        latitude={17.695955}
        longitude={83.2873}
        url="https://learngis2.maps.arcgis.com/apps/instant/basic/index.html?appid=4f7e99e7d66a4ee9b702f314a046e67a"
        path="visakhapatnam"
        href="https://raw.githubusercontent.com/anujgoenka9/Port-Data/main/vishakhapatnam.csv"
      />
      <DataMap map_url="https://frabjous-cobbler-a058ad.netlify.app/" />
      <DataCharts />
    </div>
  );
};

export default Visakhapatnam;
