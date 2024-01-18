import './Input.scss'

interface InputConstructor {
  label: string,
  type: string,
  inputID: string,
  placeholder: string | undefined
}

export function Input({label, type, inputID, placeholder}: InputConstructor){
  return (
    <>
      <label
        htmlFor={inputID}
        className="form-label mb-2"
      >
        { label }
      </label>
      <input
        type={type}
        className="Body form-control"
        id={inputID}
        placeholder={placeholder}
      />
    </>
  )
}