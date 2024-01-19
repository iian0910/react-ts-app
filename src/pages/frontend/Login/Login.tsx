import { Input } from '../../../components/Input/Input'
import { Button } from '../../../components/Button/Button'

import './Login.scss'

export function Login() {
  return (
    <>
      <div className="container-fluid px-0">
        <div className="row g-0">
          <div className="col-md-6 d-none d-md-block">
            <div className="sideImg" style={{ backgroundImage: "url('/images/pc/register.png')" }}></div>
          </div>
          <div className="col-12 col-md-6">
            <div
              className="login_contain d-flex justify-content-center align-items-center"
              style={{
                backgroundImage: `url(/images/pc/Line.svg)`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'top center'
              }}
            >
              <div className="box">
                <div className="Title Subtitle_Mobile text-primary mb-2">享樂酒店，誠摯歡迎</div>
                <div className="H1 H3_mobile text-white mb-40">立即開始旅程</div>
                <div className="mb-3">
                  <Input
                    label='電子信箱'
                    type='email'
                    inputID='mail'
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <Input
                    label='密碼'
                    type='password'
                    inputID='password'
                    placeholder=""
                  />
                </div>
                <div className='mb-40 d-flex justify-content-between'>
                  <div className='text-white Subtitle_mobile'>記住密碼</div>
                  <Button text='忘記密碼?' status='text' />
                </div>
                <div className="mb-40">
                  <Button text="會員登入" status="primary disabled"/>
                </div>
                <div className='d-flex align-items-center'>
                  <span className='text-white me-2 Subtitle_mobile'>沒有會員嗎?</span>
                  <Button text='前往註冊' status='text' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}