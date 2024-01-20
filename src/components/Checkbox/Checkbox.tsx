interface CheckboxConstructor {
  register: any,
  label: string,
  type: string,
  id: string
}

export function Checkbox ({register, label, type, id}: CheckboxConstructor) {
  return (
    <>
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
    </>
  )
}