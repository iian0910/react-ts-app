import './Input.scss'

interface InputConstructor {
  label: string,
  type: string,
  inputID: string,
  placeholder: string | undefined
  register: any,
  errors: any,
  rules: object
}

export function Input(
  {
    label,
    type,
    inputID,
    placeholder,
    register,
    errors,
    rules
  }: InputConstructor){
  return (
    <>
      <div className="mb-3">
        <label htmlFor={inputID} className='form-label'>
          {label}
        </label>
        <input
          id={inputID}
          type={type}
          defaultValue=""
          placeholder={placeholder}
          {...register(inputID, rules)}
          className={`form-control ${errors[inputID] && 'is-invalid'}`}
        />
        {
          errors[inputID] && <div className='invalid-feedback Subtitle mt-2'>{errors?.[inputID]?.message}</div>
        }
      </div>
    </>
  )
}