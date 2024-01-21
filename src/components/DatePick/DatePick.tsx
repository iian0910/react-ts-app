import { useState } from "react"

interface FormValid {
  register: any,
  errors: any
}

export function DatePick({register, errors}: FormValid) {
  const [year, setYear] = useState('')
  const [month, setMonth] = useState('')
  const [date, setDate] = useState('')

  return (
    <>
      <div className="Subtitle text-white mb-2">生日</div>
      <div className="container px-0 mb-3">
        <div className="row">
          <div className="col">
            <select
              className="form-select form-select-lg"
              id="year"
              {...register('year')}
              onChange={(e) => {
                setYear(e.target.value)
              }}
            >
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
          </div>
          <div className="col">
            <select
              className="form-select form-select-lg"
              id="month"
              {...register('month')}
              onChange={(e) => {
                setMonth(e.target.value)
              }}
            >
              <option value="1">1 月</option>
              <option value="2">2 月</option>
            </select>
          </div>
          <div className="col">
            <select
              className="form-select form-select-lg"
              id="date"
              {...register('date')}
              onChange={(e) => {
                setDate(e.target.value)
              }}
            >
              <option value="1">1 日</option>
              <option value="2">2 日</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}