import React from 'react';
import Map from '../components/map';
import DataMap from '../components/datamap';
import DataCharts from '../components/datacharts/Mormugao';
import { useState } from 'react';
import Dropdown from '../components/dropdown';

const Mormugao = () => {
  const [selected, setSelected] = useState('Choose One');
  return (
    <div>
      {/* Semantic has been implemented in the Map components */}
      <Dropdown selected={selected} setSelected={setSelected} />
      <Map
        latitude={15.411207}
        longitude={73.799978}
        url="https://learngis2.maps.arcgis.com/apps/instant/basic/index.html?appid=c1e30fdf561e40e8bfe1e3b078a52bd2"
        href="https://raw.githubusercontent.com/anujgoenka9/Port-Data/main/goa.csv"
        path="goa"
      />
      <DataMap map_url="https://extraordinary-naiad-300b21.netlify.app/" />
      <DataCharts />
    </div>
  );
};

export default Mormugao;
