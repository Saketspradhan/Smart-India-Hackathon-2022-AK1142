import React from 'react';
import { useState } from 'react';
import Map from '../components/map';
import DataMap from '../components/datamap';
import DataCharts from '../components/datacharts/Chidambaranar';
import Dropdown from '../components/dropdown';

const Chidambaranar = () => {
  const [selected, setSelected] = useState('Choose One');
  return (
    <div>
      {/* Semantic has been implemented in the Map components */}
      <Dropdown selected={selected} setSelected={setSelected} />
      <Map
        latitude={8.473}
        longitude={78.1215}
        url="https://learngis2.maps.arcgis.com/apps/instant/basic/index.html?appid=f99f52cdbb9f489f8fb8cdae33e2f4cb"
        href="https://raw.githubusercontent.com/anujgoenka9/Port-Data/main/thoothukudi.csv"
        path="chidambaranar"
      />
      {/* <DataMap map_url="https://mumbai-kepler.netlify.app/" /> */}
      <DataMap map_url="https://lively-bombolone-54b43e.netlify.app/" />
      <DataCharts />
    </div>
  );
};

export default Chidambaranar;
