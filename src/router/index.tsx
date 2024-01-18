import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/frontend/Login/Login';
import { FrontEndIndex } from '../pages/frontend';

export function Router(){
  return (
    <>
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<FrontEndIndex/>}></Route>
      </Routes>
    </>
  )
}