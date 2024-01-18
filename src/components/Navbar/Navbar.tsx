import { Link } from "react-router-dom"
import "./Navbar.scss"

export function Navbar(){
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand" >Navbar</span>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">前台畫面</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/backend">後台畫面</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}