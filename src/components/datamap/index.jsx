import React from 'react';

function DataMap(props) {
  return (
    <div style={{ backgroundColor: '#f1f4f9', textAlign: 'center',marginTop:"10vh" }}>
      {/* <h1 style={{ fontFamily: "'Fira Sans', sans-serif", fontSize: '3em' }}>
        Data Map of Vishakapatnam Port
      </h1>
      <h6
        style={{
          fontFamily: "'Fira Sans', sans-serif",
          fontSize: '1em',
          color: '#007e79',
        }}
      >
        Visualise Port Data based on BPS India
      </h6> */}
      <iframe
        style={{ width: '70vw', height: '70vh', borderRadius: '10px' }}
        className="mapmain"
        title="Data Map of Ports"
        src={props.map_url}
      ></iframe>
    </div>
  );
}

export default DataMap;
