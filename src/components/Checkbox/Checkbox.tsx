interface CheckboxConstructor {
  register: any,
  label: string,
  type: string,
  id: string,
  checkboxType: string
}

export function Checkbox ({register, label, type, id, checkboxType}: CheckboxConstructor) {
  return (
    <>
      {
        checkboxType === '1' &&
        <div>
          <label
            htmlFor={id}
            className='text-white Subtitle_mobile me-2'
          >{label}</label>
          <input
            type={type}
            id={id}
            {...register(id)}
            onChange={e => {
              console.dir(e.target)
            }}
          />
        </div>
      }
      {
        checkboxType === '2' &&
        <div>
          <input
            className="me-2"
            type={type}
            id={id}
            {...register(id)}
            onChange={e => {
              console.dir(e.target)
            }}
          />
          <label
            htmlFor={id}
            className='text-white Subtitle_mobile'
          >{label}</label>
        </div>
      }
    </>
  )
}