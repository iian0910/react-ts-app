import { Routes, Route } from 'react-router-dom';
import { Login } from '../pages/frontend/Login/Login';
import { SingIn } from '../pages/frontend/SignIn/SignIn';

export function Router(){
  return (
    <>
      <Routes>
        <Route index element={<Login/>}></Route>
        <Route path='/signIn' element={<SingIn/>}></Route>
      </Routes>
    </>
  )
}