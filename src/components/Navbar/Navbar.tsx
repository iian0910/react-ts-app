import { Link } from "react-router-dom"
import "./Navbar.scss"

import { Button } from "../Button/Button"

export function Navbar(){
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid px-0">
          <img className="hex_logo mr-auto" src="images/hex_logo.svg" alt="" />
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
            {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">前台畫面</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/backend">後台畫面</Link>
              </li>
            </ul> */}
            <div>
              <span className="navItem Title">客房資訊</span>
              <span className="navItem Title">使用者</span>
              <Button text='登入' status='text'/>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}