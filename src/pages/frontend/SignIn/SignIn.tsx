import { Input } from '../../../components/Input/Input'
import { Button } from '../../../components/Button/Button'
import { useNavigate } from 'react-router-dom'

import './SignIn.scss'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export function SingIn() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: 'onTouched' })
  const onSubmit = (data: any) => {
    console.log('DATA ==>', data)
  }

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
              <form action='' onSubmit={handleSubmit(onSubmit)}>
                <div className="box">
                  <div className="Title Subtitle_Mobile text-primary mb-2">享樂酒店，誠摯歡迎</div>
                  <div className="H1 H3_mobile text-white mb-3">立即註冊</div>
                  <div className="mb-3">
                    <Input
                      register={register}
                      errors={errors}
                      label='電子信箱'
                      type='email'
                      inputID='mail'
                      placeholder="name@example.com"
                      rules={{
                        required: {
                          value: true,
                          message: '請輸入電子信箱'
                        },
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Email 格式不正確'
                        }
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <Input
                      register={register}
                      errors={errors}
                      label='密碼'
                      type='password'
                      inputID='password'
                      placeholder=""
                      rules={{
                        required: {
                          value: true,
                          message: '請輸入密碼'
                        }
                      }}
                    />
                  </div>
                  <div className="mb-40">
                    <Input
                      register={register}
                      errors={errors}
                      label='確認密碼'
                      type='password'
                      inputID='confirmPassword'
                      placeholder=""
                      rules={{
                        required: {
                          value: true,
                          message: '請再次確認密碼'
                        }
                      }}
                    />
                  </div>
                  <div className="mb-3">
                    <Button type="submit" text="下一步" status="primary" handleChange={nextStep}/>
                  </div>
                  <div className='d-flex align-items-center'>
                    <span className='text-white me-2 Subtitle_mobile'>已經有會員了嗎?</span>
                    <Button type="button" text='立即登入' status='text' handleChange={goToLogin} />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}