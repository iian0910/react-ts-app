import { useState } from "react"
import { Input } from "../Input/Input"

interface FormValid {
  register: any,
  errors: any
}

export function Address({register, errors}: FormValid) {
  const [city, setCity] = useState('')
  const [ara, setArea] = useState('')

  return (
    <>
      <div className="Subtitle text-white mb-2">地址</div>
      <div className="container px-0">
        <div className="row">
          <div className="col">
            <select
              className="form-select form-select-lg"
              id="city"
              {...register('city')}
              onChange={(e) => {
                setCity(e.target.value)
              }}
            >
              <option value="tp">台北</option>
              <option value="tc">台中</option>
            </select>
          </div>
          <div className="col">
            <select
              className="form-select form-select-lg"
              id="area"
              {...register('area')}
              onChange={(e) => {
                setArea(e.target.value)
              }}
            >
              <option value="a-area">A 區</option>
              <option value="b-area">B 區</option>
            </select>
          </div>
        </div>
        <div className="row">
          <Input
            register={register}
            errors={errors}
            label=''
            type='text'
            inputID='address'
            placeholder="請輸入詳細地址"
            rules={{
              required: {
                value: true,
                message: '請輸入詳細地址'
              }
            }}
          />
        </div>
      </div>
      
    </>
  )
}