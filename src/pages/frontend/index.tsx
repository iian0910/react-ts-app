import { Outlet } from "react-router"

export function FrontEndIndex() {

  return (
    <>
      <div className="container-fluid px-0">
        <div className="row g-0">
          <div className="col-md-6 d-none d-md-block">
            <div className="sideImg" style={{ backgroundImage: "url('/images/pc/register.png')" }}></div>
          </div>
          <div className="col-12 col-md-6">
            {/* 註冊頁 || 登入頁 */}
            <Outlet/>
          </div>
        </div>
      </div>
    </>
  )
}