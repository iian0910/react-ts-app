import { Routes, Route } from 'react-router-dom';
import { FrontEndIndex } from '../pages/frontend/index'; 
import { BackEndIndex } from '../pages/backend/index';

export function Router(){
  return (
    <>
      <Routes>
        <Route path='/' element={<FrontEndIndex/>}></Route>
        <Route path='/backend' element={<BackEndIndex/>}></Route>
      </Routes>
    </>
  )
}