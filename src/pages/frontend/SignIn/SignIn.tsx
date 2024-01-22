import { Input } from '../../../components/Input/Input'
import { Button } from '../../../components/Button/Button'
import { Checkbox } from '../../../components/Checkbox/Checkbox'
import { Step } from '../../../components/Step/Step'
import { Address } from '../../../components/Address/Address'
import { DatePick } from '../../../components/DatePick/DatePick'
import './SignIn.scss'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export function SingIn() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: 'onTouched' })

  const [step, setStep] = useState(1)
  
  const onSubmit = (data: object) => {
    if (step === 1) {
      setStep(step + 1)
      return false
    }
    console.log('data ==>', data)
  }

  function goToLogin(){
    navigate('/')
  }

  return (
    <>
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
            <div className="H1 H3_mobile text-white">立即註冊</div>
            <Step step={step}/>
            { step === 1 &&
              <div>
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
            }
            { step === 2 &&
              <div>
                <Input
                  register={register}
                  errors={errors}
                  label='姓名'
                  type='text'
                  inputID='username'
                  placeholder="請輸入姓名"
                  rules={{
                    required: {
                      value: true,
                      message: '請輸入姓名'
                    }
                  }}
                />
                <Input
                  register={register}
                  errors={errors}
                  label='手機號碼'
                  type='text'
                  inputID='phone'
                  placeholder="請輸入手機號碼"
                  rules={{
                    required: {
                      value: true,
                      message: '請輸入手機號碼'
                    }
                  }}
                />
                <DatePick
                  register={register}
                  errors={errors}
                />
                <Address
                  register={register}
                  errors={errors}
                />
                <Checkbox
                  checkboxType='2'
                  register={register}
                  label="我已閱讀並同意本網站個資使用規範"
                  type="checkbox"
                  id="agreePolicy"
                />
              </div>
            }
            <div className="mt-40 mb-3">
              <Button type="submit" text="下一步" status="primary" handleChange={null}/>
            </div>
            <div className='d-flex align-items-center'>
              <span className='text-white me-2 Subtitle_mobile'>已經有會員了嗎?</span>
              <Button type="button" text='立即登入' status='text' handleChange={goToLogin} />
            </div>
          </div>
        </form>
      </div>
    </>
  )
}