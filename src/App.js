import './App.css';
import Header from './components/header';
import Mumbai from './pages/Mumbai';
import Chidambaranar from './pages/Chidambaranar';
import Chennai from './pages/Chennai';
import Cochin from './pages/Cochin';
import Manglore from './pages/Manglore';
import Mormugao from './pages/Mormugao';
import Visakhapatnam from './pages/Visakhapatnam';
import ParaDip from './pages/ParaDip';
import Nehru from './pages/Nehru';
import HaldiaDock from './pages/HaldiaDock';
import DeenDayal from './pages/Deendayal';
import Kamarajar from './pages/Kamarajar';
import { Routes, Route} from 'react-router-dom';
import Landing from "./pages/Landing/Landing"
function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mumbai" element={<Mumbai />} />
        <Route path="/chennai" element={<Chennai />} />
        <Route path="/goa" element={<Mormugao />} />
        <Route path="/chidambaranar" element={<Chidambaranar />} />
        <Route path="/cochin" element={<Cochin />} />
        <Route path="/manglore" element={<Manglore />} />
        <Route path="/visakhapatnam" element={<Visakhapatnam />} />
        <Route path="/paradip" element={<ParaDip />} />
        <Route path="/nehru" element={<Nehru />} />
        <Route path="/haldia" element={<HaldiaDock />} />
        <Route path="/deen" element={<DeenDayal />} />
        <Route path="/kamarajar" element={<Kamarajar />} />
      </Routes>
    </div>
  );
}

export default App;
