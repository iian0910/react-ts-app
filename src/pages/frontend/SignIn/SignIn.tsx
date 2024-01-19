import { Input } from '../../../components/Input/Input'
import { Button } from '../../../components/Button/Button'
import { useNavigate } from 'react-router-dom'

import './SignIn.scss'
import { useState } from 'react'

export function SingIn() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)

  function nextStep(){
    setStep(step + 1)
  }
  function goToLogin(){
    navigate('/')
  }
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
                <div className="H1 H3_mobile text-white mb-3">立即註冊</div>
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
                    type='string'
                    inputID='password'
                    placeholder=""
                  />
                </div>
                <div className="mb-40">
                  <Input
                    label='確認密碼'
                    type='string'
                    inputID='confirmPassword'
                    placeholder=""
                  />
                </div>
                <div className="mb-3">
                  <Button text="下一步" status="primary disabled" handleChange={nextStep}/>
                </div>
                <div className='d-flex align-items-center'>
                  <span className='text-white me-2 Subtitle_mobile'>已經有會員了嗎?</span>
                  <Button text='立即登入' status='text' handleChange={goToLogin} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}