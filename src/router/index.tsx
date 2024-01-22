import { Routes, Route } from 'react-router-dom';
import { FrontEndIndex } from '../pages/frontend';
import { Login } from '../pages/frontend/Login/Login';
import { SingIn } from '../pages/frontend/SignIn/SignIn';

export function Router(){
  return (
    <>
      <Routes>
        {/* 巢狀路由 */}
        <Route path='/' element={<FrontEndIndex/>}>
          <Route index element={<Login/>}></Route>
          <Route path='signIn' element={<SingIn/>}></Route>
        </Route>
      </Routes>
    </>
  )
}