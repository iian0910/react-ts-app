import { Input } from '../../../components/Input/Input'
import { Button } from '../../../components/Button/Button'
import { Checkbox } from '../../../components/Checkbox/Checkbox'
import './Login.scss'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'

export function Login() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {},
    mode: 'onTouched'
  })

  const onSubmit = (data: object) => {
    console.log('DATA ==>', data)
  }

  function resetPassword () {
    console.log('重新設定密碼!!!')
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
                    placeholder="text@mail.com"
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
                  <div className='d-flex justify-content-between'>
                    <Checkbox
                      checkboxType='1'
                      register={register}
                      label="記住密碼"
                      type="checkbox"
                      id="isCheck"
                    />
                    <Button type="button" text='忘記密碼?' status='text' handleChange={resetPassword} />
                  </div>
                  <div className="my-40">
                    <Button type="submit" text="會員登入" status="primary" handleChange={null}/>
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