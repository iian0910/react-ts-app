import "./Button.scss"

interface ButtonProps {
  text: string;
  status: string;
  handleChange: any
}

export function Button({ text, status, handleChange }: ButtonProps) {
  const combinedClassName = `btn ${status} Subtitle_mobile`;
  return (
    <>
      <button
        type="button"
        className={combinedClassName}
        onClick={handleChange}
      >
        {text}
      </button>
    </>
  )
}