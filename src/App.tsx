import { FrontEndIndex } from './pages/frontend/index'; 
import { BackEndIndex } from './pages/backend/index';
import './assets/style/main.scss';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './pages/conponents/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/react-ts-app/' element={<FrontEndIndex/>}></Route>
        <Route path='/react-ts-app/backend/' element={<BackEndIndex/>}></Route>
      </Routes>
    </>
  );
}

export default App;
