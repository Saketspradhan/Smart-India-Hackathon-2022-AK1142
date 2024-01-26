import React from 'react';
import { useState } from 'react';
import Map from '../components/map';
import DataMap from '../components/datamap';
import DataCharts from '../components/datacharts/Cochin';
import Dropdown from '../components/dropdown';

const Cochin = () => {
  const [selected, setSelected] = useState('Choose One');
  return (
    <div>
      {/* Semantic has been implemented in the Map components */}
      <Dropdown selected={selected} setSelected={setSelected} />
      <Map
        latitude={9.966681}
        longitude={76.27196}
        url="https://learngis2.maps.arcgis.com/apps/instant/basic/index.html?appid=04b3ec17cf5040d58b8ba67221cbcdd5"
        href="https://raw.githubusercontent.com/anujgoenka9/Port-Data/main/cochin.csv"
        path="cochin"
      />
      {/* <DataMap map_url="https://mumbai-kepler.netlify.app/" /> */}
      <DataMap map_url="https://mellow-sfogliatella-0b32e5.netlify.app/" />
      <DataCharts />
    </div>
  );
};

export default Cochin;
