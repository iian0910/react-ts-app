import "./Button.scss"

interface ButtonProps {
  text: string;
  status: string;
}

export function Button({ text, status }: ButtonProps) {
  const combinedClassName = `btn ${status}`;
  return (
    <>
      <button
        type="button"
        className={combinedClassName}
      >
        {text}
      </button>
    </>
  )
}