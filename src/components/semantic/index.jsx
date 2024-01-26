import React from 'react';
import Iframe from 'react-iframe';
import Button from 'react-bootstrap/Button';

const Semantic = (props) => {
  return (
    <div style={{ border: '1px solid black', width: '100%', height: '100%' }}>
      <Iframe url={props.url} width="100%" height="400px" />
      <Button variant="primary" href={props.href}>
        Dataset
      </Button>
    </div>
  );
};

export default Semantic;
