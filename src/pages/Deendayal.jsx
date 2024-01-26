import React from 'react';
import { useState } from 'react';
import Map from '../components/map';
import DataMap from '../components/datamap';
import DataCharts from '../components/datacharts/DeenDayal';
import Dropdown from '../components/dropdown';

const DeenDayal = () => {
  const [selected, setSelected] = useState('Choose One');
  return (
    <div>
      {/* Semantic has been implemented in the Map components */}
      <Dropdown selected={selected} setSelected={setSelected} />
      <Map
        latitude={23.002721}
        longitude={70.218651}
        url="https://learngis2.maps.arcgis.com/apps/instant/basic/index.html?appid=4c5255669c074252af23ff408474ad3c"
        href="https://raw.githubusercontent.com/anujgoenka9/Port-Data/main/deendayal.csv"
        path="deendayal"
      />
      {/* <DataMap map_url="https://mumbai-kepler.netlify.app/" /> */}
      <DataMap map_url="https://lucent-sunburst-ae070b.netlify.app/" />
      <DataCharts />
    </div>
  );
};

export default DeenDayal;
