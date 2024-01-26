import { GoogleMap, useLoadScript } from '@react-google-maps/api';
import Semantic from '../semantic';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MumbaiWeather from '../weather/MumbaiWeather';
import ParadipWeather from '../weather/ParadipWeather';
import ChennaiWeather from '../weather/ChennaiWeather';
import ChidambaranarWeather from '../weather/ChidambaranarWeather';
import CochinWeather from '../weather/CochinWeather';
import DeenDayalWeather from '../weather/DeenDayalWeather';
import HaldiaWeather from '../weather/HaldiaWeather';
import MangloreWeather from '../weather/MangloreWeather';
import KamarjarWeather from '../weather/KamarjarWeather';
import VisakhapatnamWeather from '../weather/VisakhapatnamWeather';
import NehruWeather from '../weather/NehruWeather';
import MorgmugaoWeather from '../weather/MormugaoWeather';

export default function Home(props) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBqW6L2gO43sRg0tcBJDOlKSt9EgzfC7jg',
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <div style={{ marginTop: '7.5vh' }}>
      <Container>
        <Row>
          <Col md={6} sm={12}>
            <GoogleMap
              mapContainerStyle={{ width: '100%', height: '100%' }}
              zoom={12}
              center={{ lat: props.latitude, lng: props.longitude }}
            />
          </Col>
          <Col md={6} sm={12}>
            {props.path === 'mumbai' ? (
              <MumbaiWeather lat={19.07609} lng={72.877426} />
            ) : (
              <p></p>
            )}
            {/* <MumbaiWeather /> */}
            {props.path === 'paradip' ? <ParadipWeather /> : <p></p>}

            {props.path === 'chennai' ? <ChennaiWeather /> : <p></p>}

            {props.path === 'chidambaranar' ? (
              <ChidambaranarWeather />
            ) : (
              <p></p>
            )}

            {props.path === 'cochin' ? <CochinWeather /> : <p></p>}

            {props.path === 'deendayal' ? <DeenDayalWeather /> : <p></p>}
            {props.path === 'haldia' ? <HaldiaWeather /> : <p></p>}
            {props.path === 'manglore' ? <MangloreWeather /> : <p></p>}

            {props.path === 'kamarajar' ? <KamarjarWeather /> : <p></p>}

            {props.path === 'visakhapatnam' ? (
              <VisakhapatnamWeather />
            ) : (
              <p></p>
            )}

            {props.path === 'nehru' ? <NehruWeather /> : <p></p>}
            {props.path === 'goa' ? <MorgmugaoWeather /> : <p></p>}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

// function Map(props) {
//   return (
//     <div className="map-box">
//       <GoogleMap
//         zoom={10}
//         center={{ lat: props.latitude, lng: props.longitude }}
//         mapContainerClassName="map-container"
//         width="50%"
//         height="50%"
//       >
//         Map is not showing
//       </GoogleMap>
//       <Semantic />
//     </div>
//   );
// }
