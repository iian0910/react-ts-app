import { Input } from '../../../components/Input/Input'
import { Button } from '../../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

import './Login.scss'

export function Login() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: 'onTouched' })

  const onSubmit = (data: any) => {
    console.log('DATA ==>', data)
  }

  function change () {
    console.log('!!!@@@')
  }
  function goToSingIn(){
    navigate('/signIn')
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
                  <div className="H1 H3_mobile text-white mb-40">立即開始旅程</div>
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

                  <div className='mb-40 d-flex justify-content-between'>
                    <div className='text-white Subtitle_mobile'>記住密碼</div>
                    <Button type="button" text='忘記密碼?' status='text' handleChange={change} />
                  </div>
                  <div className="mb-40">
                    <Button type="submit" text="會員登入" status="primary" handleChange={change}/>
                  </div>
                  <div className='d-flex align-items-center'>
                    <span className='text-white me-2 Subtitle_mobile'>沒有會員嗎?</span>
                    <Button type="button" text='前往註冊' status='text' handleChange={goToSingIn} />
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