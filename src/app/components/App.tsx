import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Flex } from 'theme-ui';
import { Home } from '../../home/components/Home';
import ScoutForm from '../../scouting/components/ScoutForm';
import './App.css';
import Navigation from './Navigation';

function App() {
  return (
    <Flex sx={{ flexDirection: 'column', flex: 1, height: '100%' }}>
      <ToastContainer draggable={false} limit={3} style={{ width: 400 }} />
      <Navigation />
      <Flex sx={{ flex: 1, flexDirection: 'column', overflowY: 'hidden' }}>
        <Routes>
          <Route path="/team58-site" element={<Home />} />
          <Route path="/scouting/*" element={<ScoutForm />} />
        </Routes>
      </Flex>
    </Flex>
  );
}

export default App;
