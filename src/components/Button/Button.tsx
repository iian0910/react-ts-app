import "./Button.scss"

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined,
  text: string;
  status: string;
  handleChange: any | null | undefined
}

export function Button({ type, text, status, handleChange }: ButtonProps) {
  const combinedClassName = `btn ${status} Subtitle_mobile`;
  return (
    <>
      <button
        type={type}
        className={combinedClassName}
        onClick={handleChange}
      >
        {text}
      </button>
    </>
  )
}