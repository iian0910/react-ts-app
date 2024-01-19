import { Link } from "react-router-dom"
import "./Navbar.scss"

import { Button } from "../Button/Button"

interface blockStatus {
  showNavItem: boolean
}

export function Navbar({ showNavItem }: blockStatus){
  function change(){
    console.log('123')
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid px-0">
          <img
            className="hex_logo mr-auto"
            src="images/hex_logo.svg"
            alt=""
          />
          <div className={showNavItem ? 'd-block' : 'd-none'}>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarSupportedContent"
            >
              <div className="d-flex align-items-center">
                <span className="navItem Title me-3">客房資訊</span>
                <span className="navItem Title me-3">使用者</span>
                <Button text='登入' status='primary' handleChange={change}/>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}